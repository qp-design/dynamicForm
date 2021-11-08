import { FieldType } from "libs/types/formField";
import {
  lcIsShow,
  lcSize,
  lcFocus,
  lcFocusNum,
  courageSound,
  couGalWall,
  couAfterBackSound,
  couAfterSound,
} from "constant/liverCourageOptions";

const InnerForm: Array<FieldType> = [
  {
    style: {
      display: "inline-block",
    },
    name: ["tabs", "gallbladder", "focus_size_x"],
    type: "number",
    rules: [{ required: true, message: "请输入长值" }],
    prefixIcon: (getFieldValue) => {
      const focusNum = getFieldValue(["tabs", "gallbladder", "focus_num"]);
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
    name: ["tabs", "gallbladder", "focus_size_y"],
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
    name: ["tabs", "gallbladder", "focus_num"],
    type: "radioGroup",
    label: "病灶数目",
    rules: [{ required: true, message: "请输入病灶数目" }],
    extraProps: {
      options: lcFocusNum,
    },
  },
  {
    style: { marginBottom: 0 },
    name: ["tabs", "gallbladder"],
    type: "complex",
    label: "病灶大小",
    rules: [{ required: true, message: "请输入病灶大小" }],
    extraProps: {
      innerForm: InnerForm,
    },
  },
  {
    name: ["tabs", "gallbladder", "focus_echo"],
    type: "radioGroup",
    label: "病灶回声",
    rules: [{ required: true, message: "请输入病灶回声" }],
    extraProps: {
      options: couAfterBackSound,
    },
  },
  {
    name: ["tabs", "gallbladder", "back_echo"],
    type: "radioGroup",
    label: "后方回声",
    rules: [{ required: true, message: "请输入后方回声" }],
    extraProps: {
      options: couAfterSound,
    },
  },
];

const GroupFormOne: Array<FieldType> = [
  {
    name: ["tabs", "gallbladder", "size"],
    type: "radioGroup",
    label: "大小",
    rules: [{ required: true, message: "请输入大小" }],
    extraProps: {
      options: lcSize,
    },
  },
  {
    name: ["tabs", "gallbladder", "echo"],
    type: "radioGroup",
    label: "回声",
    rules: [{ required: true, message: "请输入回声" }],
    extraProps: {
      options: courageSound,
    },
  },
  {
    name: ["tabs", "gallbladder", "gall_wall"],
    type: "radioGroup",
    label: "胆壁",
    rules: [{ required: true, message: "请输入胆壁" }],
    extraProps: {
      options: couGalWall,
    },
  },
  {
    style: { width: 200 },
    name: ["tabs", "left", "gall_wall_thickness"],
    type: "number",
    label: "胆壁厚度",
    rules: [{ required: true, message: "请输入胆壁厚度" }],
    calIsVisible: (getFieldsValue) =>
      getFieldsValue(["tabs", "gallbladder", "gall_wall"]) === 3,
    extraProps: {
      min: 0.1,
      precision: 1,
      step: 0.1,
      addonAfter: "mm",
    },
  },
  {
    name: ["tabs", "gallbladder", "exist_focus"],
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
    name: ["tabs", "gallbladder"],
    type: "complex",
    calIsVisible: (getFieldsValue) =>
      getFieldsValue(["tabs", "gallbladder", "exist_focus"]) !== 2 &&
      getFieldsValue(["tabs", "gallbladder", "exist_focus"]) !== 3,
    extraProps: {
      innerForm: GroupFormTwo,
    },
  },
];

const fieldsForm: Array<FieldType> = [
  {
    name: ["tabs", "gallbladder", "not_show"],
    type: "radioGroup",
    extraProps: {
      options: lcIsShow,
    },
  },
  {
    style: {
      marginBottom: 0,
    },
    name: ["tabs", "gallbladder"],
    type: "complex",
    calIsVisible: (getFieldsValue) =>
      getFieldsValue(["tabs", "gallbladder", "not_show"]) !== 1,
    extraProps: {
      innerForm: GroupFormOne,
    },
  },
];

const config = {
  fields: fieldsForm,
};

export default config;
