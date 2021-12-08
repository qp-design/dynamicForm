import {
  FieldType,
  // TransformType
} from "libs/types/formField";
import { FormInstance } from "antd";

const innerForm = (
  key: number,
  value: number,
  options: Array<any>,
  suffixIcon?: string
): Array<FieldType> => [
  {
    noStyle: true,
    colon: false,
    name: ["users", "selectUserDes", key],
    calIsDisabled: (getFieldValue) =>
      !(getFieldValue(["users", "selectUser"]) || []).includes(value),
    type: "select",
    rules: [
      ({ getFieldValue }: FormInstance) => ({
        required: getFieldValue?.(["users", "selectUser"])?.includes(key),
        message: "请选择",
      }),
    ],
    suffixIcon,
    extraProps: {
      placeholder: "请选择",
      options,
      style: {
        width: 200,
      },
    },
  },
  {
    noStyle: true,
    colon: false,
    name: ["users", "selectUserDesOne", key + 1],
    calIsDisabled: (getFieldValue) =>
      !(getFieldValue(["users", "selectUser"]) || []).includes(value),
    type: "select",
    rules: [
      ({ getFieldValue }: FormInstance) => ({
        required: getFieldValue?.(["users", "selectUser"])?.includes(key),
        message: "请选择",
      }),
    ],
    suffixIcon,
    extraProps: {
      placeholder: "请选择",
      options,
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
          params[2] = value.includes(2) ? 1 : undefined;
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
          value: 0,
          suffix: innerForm(
            0,
            0,
            [
              {
                label: "元素",
                value: 1,
              },
              {
                label: "组织",
                value: 12,
              },
            ],
            " 描述文字"
          ),
        },
        {
          value: 1,
          label: "嵌套的元素",
        },
        {
          value: 2,
          suffix: innerForm(2, 2, [
            {
              label: "毫无关联",
              value: 1,
            },
          ]),
        },
      ],
    },
  },
];

// const transformSubmitDataConfig: Array<TransformType> = [
//   {
//     from: "users.selectUser",
//     to: "users.selectUserDes[1]",
//     format: (value: any) => (value.includes(1) ? 100 : undefined),
//   },
// ];

const config = {
  saveText: "下一步",
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  fields: fieldsForm,
  // transformSubmitDataConfig,
};

export default config;
