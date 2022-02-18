import { Radio, Space, FormInstance } from "antd";
import ComplexFields from "./ComplexFields";

type emums = "vertical" | "horizontal";
export default function RadioGroupField({
  form,
  options,
  direction = "horizontal",
  ...extraProps
}: {
  form: FormInstance;
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
              {suffix ? <ComplexFields form={form} innerForm={suffix} /> : null}
            </Space>
          )
        )}
      </Space>
    </Radio.Group>
  );
}
