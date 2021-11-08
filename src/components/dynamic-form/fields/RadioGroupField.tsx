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
        {options.map(
          ({ direction = "horizontal", value, label, suffix }, idx) => (
            <Space key={idx} direction={direction}>
              <Radio value={value}>{label}</Radio>
              {suffix ? <ComplexFields innerForm={suffix} /> : null}
            </Space>
          )
        )}
      </Space>
    </Radio.Group>
  );
}
