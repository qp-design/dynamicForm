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
          <Space key={idx} direction={item.direction || "horizontal"}>
            <Checkbox value={item.value}>{item.label}</Checkbox>
            {item.suffix ? <ComplexFields innerForm={item.suffix} /> : null}
          </Space>
        ))}
      </Space>
    </Checkbox.Group>
  );
}
