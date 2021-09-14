import { Checkbox, FormInstance } from "antd";

export default function CheckboxGroupField({
  form,
  ...extraProps
}: {
  form?: FormInstance;
}) {
  return <Checkbox.Group {...extraProps} />;
}
