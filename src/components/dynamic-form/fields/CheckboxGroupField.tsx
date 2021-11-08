import { Checkbox, Space } from "antd";
import ComplexFields from "./ComplexFields";

type emums = "vertical" | "horizontal";
export default function CheckboxGroupField({
  options,
  direction = "horizontal",
  ...extraProps
}: {
  direction: emums;
  options: Array<any>;
}) {
  return (
    <Checkbox.Group {...extraProps}>
      <Space direction={direction}>
        {options.map(
          ({ direction = "horizontal", value, label, suffix }, idx) => (
            <Space key={idx} direction={direction}>
              <Checkbox value={value}>{label}</Checkbox>
              {suffix ? <ComplexFields innerForm={suffix} /> : null}
            </Space>
          )
        )}
      </Space>
    </Checkbox.Group>
  );
}
