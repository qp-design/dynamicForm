import { FieldType } from "libs/types/formField";
import { commonSuggestList } from "constant/healthInfo";
const innerForm = (value: number): Array<FieldType> => [
  {
    style: { width: 300 },
    name: "health_proposal_des",
    type: "textarea",
    label: " ",
    colon: false,
    rules: [{ required: true, message: "请输入健康建议" }],
    calIsVisible: (getFieldValue) => getFieldValue("health_proposal") === value,
    extraProps: {
      placeholder: "可输入其他健康建议（必填）",
      maxLength: 200,
      allowClear: true,
    },
  },
];

const getOptions = () => {
  return commonSuggestList.map((item) => {
    return {
      label: item.label,
      value: item.value,
      tips: item.desc,
      suffix: innerForm(item.value),
    };
  });
};

const fieldsForm: Array<FieldType> = [
  {
    name: "health_proposal",
    type: "radioGroup",
    label: "",
    rules: [{ required: true, message: "请选择健康等级" }],
    extraProps: {
      direction: "vertical",
      options: getOptions(),
    },
  },
];

const config = {
  saveText: "下一步",
  fields: fieldsForm,
};

export default config;
