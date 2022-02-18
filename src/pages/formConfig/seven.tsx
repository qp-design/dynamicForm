import { FieldType, TransformType } from "libs/types/formField";
import dayjs from "dayjs";
// import { FormInstance } from "antd";
const fieldsForm: Array<FieldType> = [
  {
    label: "日期",
    name: "date",
    rules: [{ required: true, message: "日期xxxxxxxx" }],
    type: "date",
  },
  {
    // noStyle: true,
    label: "日期区间",
    // prefixIcon: "日期区间",
    // suffixIcon: 12312313,
    name: "range",
    rules: [{ required: true, message: "日期区间xxxxxxxx" }],
    type: "range",
    // extraProps: {
    //   style: {
    //     // display: "inline-block",
    //     width: 300,
    //   },
    // }
  },
  {
    label: "上传",
    name: "upload",
    rules: [{ required: true, message: "日期区间xxxxxxxx" }],
    type: "upload",
    extraProps: {
      text: "上传",
      maxLength: 1,
    },
  },
];

const transformSubmitDataConfig: Array<TransformType> = [
  {
    from: "date",
    to: "date",
    format: (value: Date) => dayjs(value).format("YYYY-MM-DD"),
  },
  {
    from: "range",
    to: "date_start",
    format: (value: any) => dayjs(value[0]).format("YYYY-MM-DD"),
  },
  {
    from: "range",
    to: "date_end",
    isDelete: true,
    format: (value: any) => dayjs(value[1]).format("YYYY-MM-DD"),
  },
  {
    from: "upload",
    to: "upload",
    format: (value: any) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(100);
        }, 1000);
      }),
  },
];

const config = {
  saveText: "下一步",
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
  fields: fieldsForm,
  transformSubmitDataConfig,
};

export default config;
