import { FieldType } from "libs/types/formField";

const innerForm = (value: number): Array<FieldType> => [
  {
    style: { width: 300 },
    name: "health_proposal_des",
    type: "textarea",
    label: "其他",
    calIsVisible: (getFieldValue) => getFieldValue("health_proposal") === value,
    extraProps: {
      placeholder: "可输入其他健康建议",
      maxLength: 200,
      allowClear: true,
    },
  },
];

const fieldsForm: Array<FieldType> = [
  {
    name: "health_proposal",
    type: "radioGroup",
    label: "",
    rules: [{ required: true, message: "请选择健康等级" }],
    extraProps: {
      direction: "vertical",
      options: [
        {
          label: "健康",
          value: 0,
          tips: "建议：定期(半年)进行健康体检，超声随访。",
          suffix: innerForm(0),
        },
        {
          label: "低风险",
          value: 1,
          tips: "建议：遵医嘱结合相关治疗，超声随访（3-6个月复查甲状腺超声检查）。",
          suffix: innerForm(1),
        },
        {
          label: "中风险",
          value: 2,
          tips: "建议：遵医嘱结合实验室检查及相关治疗，如有必要到上级医院进一步检查，定期（1-3个月）进行健康检查及超声随访。",
          suffix: innerForm(2),
        },
        {
          label: "高风险",
          value: 3,
          tips: "建议：高风险，建议到上级医院进一步检查，如有必要请结合临床进行穿刺活检，定期（1-3个月）进行健康检查及超声随访。",
          suffix: innerForm(3),
        },
      ],
    },
  },
];

const config = {
  saveText: "下一步",
  fields: fieldsForm,
};

export default config;
