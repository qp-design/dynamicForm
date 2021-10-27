import { FieldType } from "libs/types/formField";
import { soundThyNormal } from "constant/selectOptions";
import { FormInstance } from "antd";

const InnerForm: Array<FieldType> = [
  {
    style: {
      display: "inline-block",
    },
    name: ["checkboxNormal"],
    type: "checkbox",
    // rules: [{ required: true, message: "请选择" }],
    extraProps: {
      label: "",
    },
  },
  {
    style: {
      display: "inline-block",
      width: 120,
    },
    name: ["cs_tips"],
    type: "select",
    calIsDisabled: (getFieldValue) => !getFieldValue(["checkboxNormal"]),
    rules: [
      (form: FormInstance) => {
        return {
          required: form.getFieldValue("checkboxNormal"),
          message: "请选择",
        };
      },
    ],
    extraProps: {
      disabled: true,
      placeholder: "请选择",
      options: soundThyNormal,
    },
  },
];

const fieldsForm: Array<FieldType> = [
  {
    name: "",
    type: "complex",
    // rules: [{ required: true, message: "请至少勾选一项超声提示" }],
    extraProps: {
      innerForm: InnerForm,
      label: "",
    },
  },
];

const config = {
  saveText: "下一步",
  fields: fieldsForm,
};

export default config;
