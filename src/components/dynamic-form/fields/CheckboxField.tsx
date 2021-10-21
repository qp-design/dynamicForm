import Checkbox from "antd/lib/checkbox";

export default function CheckboxField({
  label,
  ...extraProps
}: {
  label: string;
}) {
  return <Checkbox {...extraProps}>{label}</Checkbox>;
}
