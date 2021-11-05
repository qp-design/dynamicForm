import { FieldType } from "libs/types/formField";

const fieldsForm: Array<FieldType> = [
  {
    name: "liver_remark",
    type: "textarea",
    label: "肝脏左右叶其他备注",
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
