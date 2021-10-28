// import { Checkbox } from "antd";

// export default function CheckboxGroupField({ ...extraProps }) {
//   return <Checkbox.Group {...extraProps} />;
// }

// import { Radio } from "antd";

// export default function RadioGroupField({ ...extraProps }) {
//   return <Radio.Group {...extraProps} />;
// }

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
      <Space direction={direction} size="large">
        {options.map((item, idx) => (
          <Space direction="horizontal" key={idx}>
            <Checkbox key={idx} value={item.value}>
              {item.label}
              {item.tips && <div>{item.tips}</div>}
            </Checkbox>
            {item.suffix ? <ComplexFields innerForm={item.suffix} /> : null}
          </Space>
        ))}
      </Space>
    </Checkbox.Group>
  );
}
