import { FieldType } from "libs/types/formField";
import {
  breastNormal,
  breastNodule,
  breastLesion,
  breastExpands,
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
    prefixIcon: () => {
      return value === 4 ? suffixIconValue : "";
    },
    suffixIcon: () => {
      return value !== 4 ? suffixIconValue : "";
    },
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
          suffix: innerForm(0, "乳腺超声检查未见明显异常", breastNormal),
        },
        {
          label: "",
          value: 1,
          suffix: innerForm(1, "乳腺结节", breastNodule),
        },
        {
          label: "",
          value: 2,
          suffix: innerForm(2, "乳腺增生性病变", breastLesion),
        },
        {
          label: "",
          value: 3,
          suffix: innerForm(3, "乳腺导管扩张", breastExpands),
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
