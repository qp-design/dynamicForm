import { FieldType } from "libs/types/formField";

const innerForm: Array<FieldType> = [
  {
    colon: false,
    name: "testOne",
    type: "checkbox",
    label: " ",
    prefixIcon: (
      <div>
        内蒙古自治区疾控中心副主任范蒙光表示，额济纳旗疫情防控难点体现在：医疗资源比较匮乏；病例的病情非常隐匿；由于地广人稀，口岸封控难度较大。
      </div>
    ),
    extraProps: {
      label: "选中输入名称4",
      placeholder: "请输入名称1",
    },
  },
];

const fieldsForm: Array<FieldType> = [
  {
    name: "user",
    type: "radioGroup",
    label: "说明",
    extraProps: {
      options: [
        {
          label: "1说明大小",
          value: 1,
          suffix: innerForm,
        },
        {
          label: "2说明大小",
          value: 2,
          suffix: innerForm,
        },
      ],
      a: "123",
    },
  },
];

const config = {
  saveText: "下一步",
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  fields: fieldsForm,
};

export default config;
