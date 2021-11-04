import { FieldType } from "libs/types/formField";
import {
  soundCarNormal,
  soundCarFilm,
  soundCarFilmGred,
  soundCarPlaQue,
  soundCarStenosis,
} from "constant/selectOptions";
import { FormInstance } from "antd";
const innerForm = (
  value: number,
  suffixIconValue: string,
  options: any
): Array<FieldType> => [
  {
    style: { display: "inline-block", width: 120, marginBottom: 0 },
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
          suffix: innerForm(0, "颈动脉超声检查未见明显异常", soundCarNormal),
        },
        {
          label: "",
          value: 1,
          suffix: innerForm(1, "颈动脉内中膜增厚风险增加", soundCarFilm),
        },
        {
          label: "",
          value: 2,
          suffix: innerForm(2, "颈动脉内中膜增厚", soundCarFilmGred),
        },
        {
          label: "",
          value: 3,
          suffix: innerForm(3, "颈动脉可见斑块", soundCarPlaQue),
        },
        {
          label: "",
          value: 4,
          suffix: innerForm(
            4,
            "颈动脉斑块形成伴局部管腔狭窄，面积狭窄率约",
            soundCarStenosis
          ),
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
