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
        {options.map((item, idx) => (
          <Checkbox key={idx} value={item.value}>
            {item.label}
            {item.suffix ? <ComplexFields innerForm={item.suffix} /> : null}
          </Checkbox>
        ))}
      </Space>
    </Checkbox.Group>
  );
}
