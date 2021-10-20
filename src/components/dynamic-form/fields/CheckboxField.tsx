import Checkbox from "antd/lib/checkbox";
import { FormInstance } from "antd";

export default function CheckboxField({
  label,
  ...extraProps
}: {
  label: string;
}) {
  return <Checkbox {...extraProps}>{label}</Checkbox>;
}
