import { Radio, Space } from "antd";
import ComplexFields from "./ComplexFields";

type emums = "vertical" | "horizontal";
export default function RadioGroupField({
  options,
  direction = "horizontal",
  ...extraProps
}: {
  direction: emums;
  options: Array<any>;
}) {
  return (
    <Radio.Group {...extraProps}>
      <Space direction={direction}>
        {options.map((item, idx) => (
          <Space key={idx} direction={item.direction || "horizontal"}>
            <Radio value={item.value}>{item.label}</Radio>
            {item.suffix ? <ComplexFields innerForm={item.suffix} /> : null}
          </Space>
        ))}
      </Space>
    </Radio.Group>
  );
}
