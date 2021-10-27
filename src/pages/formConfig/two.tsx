import { FieldType, NamePath } from "libs/types/formField";
interface innerConfigType {
  name: NamePath;
  [v: string]: unknown;
}

const formLineConfig = (params: Array<innerConfigType>): Array<FieldType> => [
  {
    ...params[0],
    type: "checkbox",
  },
  {
    ...params[1],
    type: "text",
    calIsDisabled: (getFieldValue) => !getFieldValue(params[0].name),
  },
];
const fieldsForm: Array<FieldType> = [
  {
    label: "结节大小",
    name: "user",
    rules: [{ required: true, message: "xxxxxxxx" }],
    type: "complex",
    extraProps: {
      innerForm: [
        ...formLineConfig([
          {
            style: {
              display: "inline-block",
              width: 40,
            },
            name: ["user", 0, "one", "name"],
            type: "checkbox",
          },
          {
            style: {
              display: "inline-block",
              width: "90%",
            },
            name: ["user", 0, "one", "des"],
          },
        ]),
        ...formLineConfig([
          {
            style: {
              display: "inline-block",
              width: 40,
            },
            name: ["user", 1, "one", "name"],
            type: "checkbox",
          },
          {
            style: {
              display: "inline-block",
              width: "90%",
            },
            name: ["user", 1, "one", "des"],
          },
        ]),
      ],
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
