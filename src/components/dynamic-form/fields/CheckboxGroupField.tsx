import { Checkbox, FormInstance, Space } from "antd";
import ComplexFields from "./ComplexFields";

type emums = "vertical" | "horizontal";
export default function CheckboxGroupField({
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
    <Checkbox.Group {...extraProps}>
      <Space direction={direction}>
        {options.map(
          ({ direction = "horizontal", value, label, suffix }, idx) => (
            <Space key={idx} direction={direction}>
              <Checkbox value={value}>{label}</Checkbox>
              {suffix ? <ComplexFields form={form} innerForm={suffix} /> : null}
            </Space>
          )
        )}
      </Space>
    </Checkbox.Group>
  );
}
