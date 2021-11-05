import { FieldType } from "libs/types/formField";

const fieldsForm: Array<FieldType> = [
  {
    name: "cssj",
    type: "textarea",
    label: " ",
    colon: false,
    rules: [{ required: true, message: "请输入超声所见内容" }],
    extraProps: {
      placeholder: "请输入超声所见内容",
    },
  },
];

const config = {
  saveText: "下一步",
  fields: fieldsForm,
};

export default config;
