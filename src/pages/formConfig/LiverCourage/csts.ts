import { FieldType } from "libs/types/formField";
import {
  soundLiverNormal,
  // soundLiverCou,
  // soundThyCalci
} from "constant/selectOptions";
import { FormInstance } from "antd";
const innerForm = (
  value: number,
  suffixIconValue: string,
  options: any
): Array<FieldType> => [
  {
    style: { display: "inline-block", width: 100, marginBottom: 0 },
    name: ["cs_tips", value],
    type: "select",
    calIsDisabled: (getFieldValue) => !getFieldValue("csts")?.includes(value),
    rules: [
      (form: FormInstance) => {
        const isChecked = form.getFieldValue("csts")?.includes(value);
        return { required: isChecked, message: "请选择" };
      },
    ],
    suffixIcon: () => suffixIconValue,
    extraProps: {
      options,
    },
  },
];

const innerFormTextArea = (value: string): Array<FieldType> => [
  {
    style: { width: 300 },
    name: "cs_tip_des",
    type: "textarea",
    calIsDisabled: (getFieldValue) => !getFieldValue("csts")?.includes(value),
    rules: [
      (form: FormInstance) => {
        return {
          required: form.getFieldValue("csts")?.includes(value),
          message: "请输入其他描述内容",
        };
      },
    ],
    extraProps: {
      placeholder: "可输入其他描述内容",
    },
  },
];

const fieldsForm: Array<FieldType> = [
  {
    name: "csts",
    type: "checkboxGroup",
    label: "",
    rules: [
      { required: true, message: "请至少勾选一项超声提示" },
      ({ getFieldsValue, setFieldsValue }: FormInstance) => ({
        validator(_: unknown, value: Array<number> | undefined) {
          const { cs_tips, csts } = getFieldsValue();
          const params = cs_tips.map((item: string, idx: number) =>
            value?.includes(idx) ? item : undefined
          );
          setFieldsValue?.({ cs_tips: params });
          if (!csts?.includes("other")) {
            setFieldsValue?.({ cs_tip_des: undefined });
          }
          return Promise.resolve();
        },
      }),
    ],
    extraProps: {
      direction: "vertical",
      options: [
        {
          label: "",
          value: 0,
          suffix: innerForm(0, "超声检查未见明显异常", soundLiverNormal),
        },
        {
          label: "",
          value: 1,
          suffix: [
            {
              style: { display: "inline-block", width: 100, marginBottom: 0 },
              name: ["cs_tips", 1],
              type: "select",
              calIsDisabled: (getFieldValue: any) =>
                !getFieldValue("csts")?.includes(1),
              rules: [
                (form: FormInstance) => {
                  const isChecked = form.getFieldValue("csts")?.includes(1);
                  return { required: isChecked, message: "请选择" };
                },
              ],
              suffixIcon: () => "肝内脂肪浸润",
              extraProps: {
                options: [
                  {
                    label: "肝内脂肪浸润",
                    value: "15",
                  },
                ],
              },
            },
          ],
        },
        // {
        //   label: "",
        //   value: 1,
        //   suffix: innerForm(1, "甲状腺结节", soundThyNodule),
        // },
        // {
        //   label: "",
        //   value: 2,
        //   suffix: innerForm(2, "甲状腺结节伴钙化", soundThyAndNodule),
        // },
        // {
        //   label: "",
        //   value: 3,
        //   suffix: innerForm(
        //     3,
        //     "甲状腺弥漫性病变，结合甲状腺功能检查",
        //     soundThyChange
        //   ),
        // },
        // {
        //   label: "",
        //   value: 4,
        //   suffix: innerForm(4, "甲状腺肿大", soundThyBig),
        // },
        // {
        //   label: "",
        //   value: 5,
        //   suffix: innerForm(5, "甲状腺钙化灶", soundThyKit),
        // },
        {
          label: "其他",
          value: "other",
          suffix: innerFormTextArea("other"),
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
