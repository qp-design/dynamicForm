import { Radio } from "antd";
import ComplexFields from "./ComplexFields";

export default function RadioGroupField({
  options,
  ...extraProps
}: {
  options: Array<any>;
}) {
  return (
    <Radio.Group {...extraProps}>
      {options.map((item, idx) => (
        <Radio key={idx} value={item.value}>
          {item.label}
          {item.suffix ? <ComplexFields innerForm={item.suffix} /> : null}
        </Radio>
      ))}
    </Radio.Group>
  );
}
