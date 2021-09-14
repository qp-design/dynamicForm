import { Form, Button, message } from "antd";
import React, { useCallback, useState } from "react";
import { FieldType, submitType } from "libs/types/formField";
import dynamicFormFields from "./dynamicFormFields";
import { FormProps } from "antd/lib/form/Form";
import { ColProps } from "antd/lib/grid";

interface Props extends FormProps {
  saveText?: string;
  initialValues?: { [v: string]: unknown };
  onSubmit: (...args: submitType) => void;
  fields: Array<FieldType>;
  onValuesChange?: (...args: unknown[]) => void;
  wrapperCol?: ColProps;
  formItemLayout?: { labelCol?: ColProps; wrapperCol?: ColProps };
}

const DynamicForm = ({
  saveText,
  layout = "horizontal",
  wrapperCol = {},
  formItemLayout = {},
  initialValues,
  onSubmit,
  onValuesChange,
  fields,
}: Props) => {
  const [form] = Form.useForm();
  const [loading, setIsSubmitting] = useState<boolean>(false);

  const onFinish = useCallback(
    (values) => {
      setIsSubmitting(true);
      onSubmit(
        values,
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
    },
    [form, onSubmit]
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
        ...formItemLayout,
      }}
      name="basic"
      onValuesChange={onValuesChange?.bind(null, form)}
    >
      {dynamicFormFields(fields, form)}
      <Form.Item wrapperCol={wrapperCol}>
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
