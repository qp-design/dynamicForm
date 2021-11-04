import { Form, Button, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { FieldType, submitType } from "libs/types/formField";
import dynamicFormFields from "./dynamicFormFields";
import { FormInstance, FormProps } from "antd/lib/form/Form";

interface Props extends FormProps {
  saveText?: string;
  initialValues?: { [v: string]: unknown };
  onSubmit?: (...args: submitType) => void;
  fields: Array<FieldType>;
  form: FormInstance;
}

const DynamicForm = ({
  saveText,
  layout = "horizontal",
  wrapperCol = {},
  labelCol = {},
  initialValues,
  onSubmit = () => {},
  fields: defaultFields,
  form,
}: Props) => {
  // const [form] = Form.useForm();
  const [fields, setFormFields] = useState<Array<FieldType>>([]);
  const [loading, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    setFormFields(defaultFields);
  }, [defaultFields]);

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
        wrapperCol,
        labelCol,
      }}
      name="basic"
      size="small"
    >
      {dynamicFormFields(fields)}
      {saveText && (
        <Form.Item>
          <Button
            size="large"
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            {saveText}
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default DynamicForm;
