import { FieldType } from "libs/types/formField";

const fieldsForm: Array<FieldType> = [
  {
    name: "gallbladder_remark",
    type: "textarea",
    label: "胆囊其他备注",
    extraProps: {
      placeholder: "可输入其他描述内容",
    },
  },
];

const config = {
  saveText: "下一步",
  fields: fieldsForm,
};

export default config;
