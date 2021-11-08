import { FieldType } from "libs/types/formField";
import { FormInstance } from "antd";

const innerForm = (key: number, value: number): Array<FieldType> => [
  {
    noStyle: true,
    colon: false,
    name: ["users", "selectUserDes", key],
    calIsDisabled: (getFieldValue) =>
      !(getFieldValue(["users", "selectUser"]) || []).includes(value),
    type: "select",
    extraProps: {
      options: [
        {
          label: "123123",
          value: 1,
        },
        {
          label: "22222",
          value: 12,
        },
      ],
      style: {
        width: 200,
      },
    },
  },
];

const fieldsForm: Array<FieldType> = [
  {
    name: ["users", "selectUser"],
    type: "checkboxGroup",
    label: "说明",
    rules: [
      {
        required: true,
        message: "至少选择一项项",
      },
      ({ getFieldValue, setFieldsValue }: FormInstance) => ({
        validator(_: unknown, value: Array<number>) {
          const values = getFieldValue(["users", "selectUserDes"]) || [];
          const params = values.map((item: string, idx: number) =>
            value.includes(idx) ? item : undefined
          );
          setFieldsValue({
            users: {
              selectUserDes: params,
            },
          });
          return Promise.resolve();
        },
      }),
    ],
    extraProps: {
      direction: "vertical",
      options: [
        {
          direction: "vertical",
          value: 0,
          suffix: innerForm(0, 0),
        },
        {
          value: 1,
          suffix: innerForm(1, 1),
        },
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
