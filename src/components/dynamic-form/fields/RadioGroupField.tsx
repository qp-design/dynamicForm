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
          <Radio key={idx} value={item.value}>
            {item.label}
            {item.suffix ? <ComplexFields innerForm={item.suffix} /> : null}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
}
