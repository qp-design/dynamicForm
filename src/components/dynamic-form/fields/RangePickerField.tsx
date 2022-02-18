import DatePicker from "antd/lib/date-picker";

const { RangePicker } = DatePicker;

export default function RangePickerField({ ...extraProps }) {
  return <RangePicker {...extraProps} />;
}
