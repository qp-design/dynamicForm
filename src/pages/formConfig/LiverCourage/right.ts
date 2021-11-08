import { FieldType } from "libs/types/formField";
import {
  lcIsShow,
  lcSize,
  lcSound,
  lcSoundEven,
  lcPipe,
  lcFilm,
  lcBold,
  lcLiquid,
  lcFocus,
  lcFocusNum,
  lcEcho,
  lcForm,
  lcBorder,
  lcAfterSound,
} from "constant/liverCourageOptions";

const InnerForm: Array<FieldType> = [
  {
    style: {
      display: "inline-block",
    },
    name: ["tabs", "right", "focus_size_x"],
    type: "number",
    rules: [{ required: true, message: "请输入长值" }],
    prefixIcon: (getFieldValue) => {
      const focusNum = getFieldValue(["tabs", "right", "focus_num"]);
      return focusNum === 1 ? "约长" : "大者约长";
    },
    suffixIcon: () => "mm",
    extraProps: {
      min: 0.1,
      precision: 1,
      step: 0.1,
    },
  },
  {
    style: {
      display: "inline-block",
    },
    name: ["tabs", "right", "focus_size_y"],
    type: "number",
    rules: [{ required: true, message: "请输入宽值" }],
    prefixIcon: () => " * 宽",
    suffixIcon: () => "mm",
    extraProps: {
      min: 0.1,
      precision: 1,
      step: 0.1,
    },
  },
];

const GroupFormTwo: Array<FieldType> = [
  {
    name: ["tabs", "right", "focus_num"],
    type: "radioGroup",
    label: "病灶数目",
    rules: [{ required: true, message: "请输入病灶数目" }],
    extraProps: {
      options: lcFocusNum,
    },
  },
  {
    style: { marginBottom: 0 },
    name: ["tabs", "right"],
    type: "complex",
    label: "病灶大小",
    rules: [{ required: true, message: "请输入病灶大小" }],
    extraProps: {
      innerForm: InnerForm,
    },
  },
  {
    name: ["tabs", "right", "focus_echo"],
    type: "radioGroup",
    label: "病灶回声",
    rules: [{ required: true, message: "请输入病灶回声" }],
    extraProps: {
      options: lcEcho,
    },
  },
  {
    name: ["tabs", "right", "focus_form"],
    type: "radioGroup",
    label: "病灶形态",
    rules: [{ required: true, message: "请输入病灶形态" }],
    extraProps: {
      options: lcForm,
    },
  },
  {
    name: ["tabs", "right", "focus_boundary"],
    type: "radioGroup",
    label: "病灶边界",
    rules: [{ required: true, message: "请输入病灶边界" }],
    extraProps: {
      options: lcBorder,
    },
  },
  {
    name: ["tabs", "right", "back_echo"],
    type: "radioGroup",
    label: "后方回声",
    rules: [{ required: true, message: "请输入后方回声" }],
    extraProps: {
      options: lcAfterSound,
    },
  },
];

const GroupFormOne: Array<FieldType> = [
  {
    name: ["tabs", "right", "size"],
    type: "radioGroup",
    label: "大小",
    rules: [{ required: true, message: "请输入大小" }],
    extraProps: {
      options: lcSize,
    },
  },
  {
    name: ["tabs", "right", "echo"],
    type: "radioGroup",
    label: "回声",
    rules: [{ required: true, message: "请输入回声" }],
    extraProps: {
      options: lcSound,
    },
  },
  {
    name: ["tabs", "right", "echo_uniformity"],
    type: "radioGroup",
    label: "回声均匀性",
    rules: [{ required: true, message: "请输入回声均匀性" }],
    extraProps: {
      options: lcSoundEven,
    },
  },
  {
    name: ["tabs", "right", "intrahepatic_duct"],
    type: "radioGroup",
    label: "肝内管道",
    rules: [{ required: true, message: "请输入肝内管道" }],
    extraProps: {
      options: lcPipe,
    },
  },
  {
    name: ["tabs", "right", "liver_capsule"],
    type: "radioGroup",
    label: "肝包膜",
    rules: [{ required: true, message: "请输入肝包膜" }],
    extraProps: {
      options: lcFilm,
    },
  },
  {
    name: ["tabs", "right", "intrahepatic_blood_flow"],
    type: "radioGroup",
    label: "肝内血流",
    rules: [{ required: true, message: "请输入肝内血流" }],
    extraProps: {
      options: lcBold,
    },
  },
  {
    name: ["tabs", "right", "perihepatic_effusion"],
    type: "radioGroup",
    label: "肝周积液",
    rules: [{ required: true, message: "请输入肝周积液" }],
    extraProps: {
      options: lcLiquid,
    },
  },
  {
    name: ["tabs", "right", "exist_focus"],
    type: "radioGroup",
    label: "有无病灶",
    rules: [{ required: true, message: "请输入有无病灶" }],
    extraProps: {
      options: lcFocus,
    },
  },
  {
    style: {
      marginBottom: 0,
    },
    name: ["tabs", "right"],
    type: "complex",
    calIsVisible: (getFieldsValue) =>
      getFieldsValue(["tabs", "right", "exist_focus"]) !== 2 &&
      getFieldsValue(["tabs", "right", "exist_focus"]) !== 3,
    extraProps: {
      innerForm: GroupFormTwo,
    },
  },
];

const fieldsForm: Array<FieldType> = [
  {
    name: ["tabs", "right", "not_show"],
    type: "radioGroup",
    extraProps: {
      options: lcIsShow,
    },
  },
  {
    style: {
      marginBottom: 0,
    },
    name: ["tabs", "right"],
    type: "complex",
    calIsVisible: (getFieldsValue) =>
      getFieldsValue(["tabs", "right", "not_show"]) !== 1,
    extraProps: {
      innerForm: GroupFormOne,
    },
  },
];

const config = {
  fields: fieldsForm,
};

export default config;
