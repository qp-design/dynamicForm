import { Form, Button, message } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { FieldType, submitType, TransformType } from "libs/types/formField";
import dynamicFormFields from "./dynamicFormFields";
import { FormProps } from "antd/lib/form/Form";
import get from "lodash/get";
import set from "lodash/set";
import omit from "lodash/omit";
import cloneDeep from "lodash/cloneDeep";

interface Props extends FormProps {
  saveText?: string;
  initialValues?: { [v: string]: unknown };
  onSubmit: (...args: submitType) => void;
  fields: Array<FieldType>;
  transformSubmitDataConfig?: Array<TransformType>;
}

const DynamicForm = ({
  saveText,
  layout = "horizontal",
  wrapperCol = {},
  labelCol = {},
  initialValues,
  onSubmit,
  fields: defaultFields,
  transformSubmitDataConfig = [],
}: Props) => {
  const [form] = Form.useForm();
  const [fields, setFormFields] = useState<Array<FieldType>>([]);
  const [loading, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    setFormFields(defaultFields);
  }, [defaultFields]);

  const computedSubmitValues = useCallback(
    async (values: { [v: string]: unknown }) => {
      const forkTransformConfig = cloneDeep(transformSubmitDataConfig);
      while (forkTransformConfig.length > 0) {
        const {
          from,
          isDelete = false,
          to,
          format,
        } = forkTransformConfig.shift() as TransformType;
        const prevValue = get(values, from);
        const value = get(values, to);
        try {
          const computedValue = await format(prevValue, value);
          set(values, to, computedValue);
          if (isDelete) {
            values = omit(values, from);
          }
        } catch (err: any) {
          const msg = err.message || err.msg || "数据转化失败";
          throw new Error(msg);
        }
      }
      return values;
    },
    [transformSubmitDataConfig]
  );

  const onFinish = useCallback(
    async (values) => {
      setIsSubmitting(true);
      try {
        const value = await computedSubmitValues(values);
        onSubmit(
          value,
          (msg) => {
            const { setFieldsValue, getFieldsValue } = form;
            setIsSubmitting(false);
            setFieldsValue(getFieldsValue()); // reset form touched state
            if (msg) message.success(msg);
          },
          () => {
            setIsSubmitting(false);
          }
        );
      } catch (err: any) {
        message.error(err.message);
        setIsSubmitting(false);
      }
    },
    [form, onSubmit, computedSubmitValues]
  );

  const onFinishFailed = useCallback(
    ({ errorFields }) => {
      form.scrollToField(errorFields[0].name);
    },
    [form]
  );

  return (
    <Form
      {...{
        layout,
        form,
        onFinish,
        onFinishFailed,
        initialValues,
        wrapperCol,
        labelCol,
      }}
      name="basic"
    >
      {dynamicFormFields(fields, form)}
      <Form.Item label=" " colon={false}>
        <>
          {saveText && (
            <Button loading={loading} type="primary" htmlType="submit">
              {saveText}
            </Button>
          )}
        </>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;
