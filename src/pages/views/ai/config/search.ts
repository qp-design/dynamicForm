import { FieldType } from "libs/types/formField";

const fieldsForm: Array<FieldType> = [
  {
    name: "id",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入查询的检查单号" }],
    extraProps: {
      prefix: "检查单号",
      placeholder: "请输入查询的检查单号",
      style: {
        height: 40,
        width: 400,
      },
    },
  },
];

export default fieldsForm;
