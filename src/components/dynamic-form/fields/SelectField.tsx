import Select from "antd/lib/select";
const { Option } = Select;

const SelectFields = ({
  options,
  optionsName = "label",
  optionsKey = "value",
  ...restProps
}: {
  options: Array<{ [v: string]: string | number }>;
  optionsName: string;
  optionsKey: string;
}) => {
  return (
    <Select
      {...restProps}
      optionLabelProp="label"
      optionFilterProp="children"
      getPopupContainer={(trigger) => {
        if (trigger) {
          return trigger.parentNode;
        } else {
          return document.body;
        }
      }}
    >
      {options.map((item) => (
        <Option
          key={item[optionsKey]}
          disabled={Boolean(item.disabled)}
          label={item[optionsName]}
          value={item[optionsKey]}
        >
          {item[optionsName]}
        </Option>
      ))}
    </Select>
  );
};
export default SelectFields;
