import Checkbox from "antd/lib/checkbox";
import { FormInstance } from "antd";

export default function CheckboxField({
  form,
  lable,
  ...extraProps
}: {
  form: FormInstance;
  lable: string;
}) {
  return <Checkbox {...extraProps}>{lable}</Checkbox>;
}
