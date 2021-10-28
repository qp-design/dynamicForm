// import { Radio } from "antd";

// export default function RadioGroupField({ ...extraProps }) {
//   return <Radio.Group {...extraProps} />;
// }

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
            {item.tips && <div>{item.tips}</div>}
            {item.suffix ? <ComplexFields innerForm={item.suffix} /> : null}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
}
