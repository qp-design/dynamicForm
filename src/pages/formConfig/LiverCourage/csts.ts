import { FieldType } from "libs/types/formField";
import {
  soundLiverNormal,
  soundLiverCou,
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
          label: "肝内脂肪浸润",
          value: 1,
        },
        {
          label: "",
          value: 2,
          suffix: innerForm(2, "脂肪肝", soundLiverCou),
        },
        {
          label: "局限性脂肪肝",
          value: 3,
        },
        {
          label: "慢性肝病，考虑肝纤维化，请结合肝功能检查",
          value: 4,
        },
        {
          label: "慢性肝病，考虑肝硬化，请结合肝功能检查",
          value: 5,
        },
        {
          label: "胆囊炎",
          value: 6,
        },
        {
          label: "胆囊结石",
          value: 7,
        },
        {
          label: "胆壁胆固醇结晶",
          value: 8,
        },
        {
          label: "胆囊息肉",
          value: 9,
        },
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
