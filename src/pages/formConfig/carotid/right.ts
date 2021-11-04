import { FieldType } from "libs/types/formField";
import {
  IsShow,
  caInner,
  caInnerSurface,
  caInnerSound,
  caPipeSound,
  caPlaqueSound,
  caPlaqueLose,
  specialList,
} from "constant/carotidArteryOptions";

const InnerForm: Array<FieldType> = [
  {
    style: {
      display: "inline-block",
    },
    name: ["tabs", "right", "patch_size_long"],
    type: "number",
    rules: [{ required: true, message: "请输入横值" }],
    prefixIcon: (getFieldValue) => {
      const tuberNum = getFieldValue(["tabs", "right", "luminal_patch"]);
      return tuberNum === 2 ? "长约" : "大者长约";
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
    name: ["tabs", "right", "patch_size_thick"],
    type: "number",
    rules: [{ required: true, message: "请输入厚值" }],
    prefixIcon: () => " * 厚",
    suffixIcon: () => "mm",
    extraProps: {
      min: 0.1,
      precision: 1,
      step: 0.1,
    },
  },
];
const GroupFormOne: Array<FieldType> = [
  {
    name: ["tabs", "right", "inside_diameter"],
    type: "radioGroup",
    label: "内径",
    extraProps: {
      options: caInner,
    },
  },
  {
    name: ["tabs", "right", "intimal_surface"],
    type: "radioGroup",
    label: "内膜表面",
    rules: [{ required: true, message: "请输入内膜表面" }],
    extraProps: {
      options: caInnerSurface,
    },
  },
  {
    style: { width: 220 },
    name: ["tabs", "right", "intimal_thickness"],
    type: "number",
    label: "内中膜厚度",
    rules: [{ required: true, message: "请输入内中膜厚度" }],
    extraProps: {
      min: 0.01,
      max: 1.5,
      precision: 2,
      step: 0.01,
      addonAfter: "mm",
    },
  },
  {
    name: ["tabs", "right", "intimal_echoes"],
    type: "radioGroup",
    label: "内中膜回声",
    rules: [{ required: true, message: "请输入内中膜回声" }],
    extraProps: {
      options: caInnerSound,
    },
  },
  {
    name: ["tabs", "right", "luminal_patch"],
    type: "radioGroup",
    label: "管腔斑块",
    rules: [{ required: true, message: "请输入管腔斑块" }],
    extraProps: {
      options: caPipeSound,
    },
  },
  {
    style: { marginBottom: 0 },
    name: ["tabs", "right"],
    type: "complex",
    label: "斑块大小",
    rules: [{ required: true, message: "请输入斑块大小" }],
    calIsVisible: (getFieldsValue) =>
      getFieldsValue(["tabs", "right", "luminal_patch"]) !== 1,
    extraProps: {
      innerForm: InnerForm,
    },
  },
  {
    name: ["tabs", "right", "patch_echoes"],
    type: "radioGroup",
    label: "斑块回声",
    rules: [{ required: true, message: "请输入斑块回声" }],
    calIsVisible: (getFieldsValue) =>
      getFieldsValue(["tabs", "right", "luminal_patch"]) !== 1,
    extraProps: {
      options: caPlaqueSound,
    },
  },
  {
    name: ["tabs", "right", "blood_flow"],
    type: "radioGroup",
    label: "血流信号",
    rules: [{ required: true, message: "请输入血流信号" }],
    extraProps: {
      options: caPlaqueLose,
    },
  },
  {
    style: { width: 450 },
    name: ["tabs", "right", "peak_systolic_velocity"],
    type: "number",
    label: "收缩期峰值流速（PSV）",
    extraProps: {
      min: 0.1,
      precision: 1,
      step: 0.1,
      addonAfter: "（参考范围：40-100cm/s）",
    },
  },
  {
    style: { width: 450 },
    name: ["tabs", "right", "pulsatility_index"],
    type: "number",
    label: "搏动指数（PI）",
    extraProps: {
      min: 0.1,
      precision: 1,
      step: 0.1,
      addonAfter: "（参考范围：2.0-3.0）",
    },
  },
  {
    style: { width: 450 },
    name: ["tabs", "right", "resistance_index"],
    type: "number",
    label: "阻力指数（RI）",
    extraProps: {
      min: 0.1,
      precision: 1,
      step: 0.1,
      addonAfter: "（参考范围：0.5-0.8）",
    },
  },
  {
    style: { width: 450 },
    name: ["tabs", "right", "heart_rate"],
    type: "number",
    label: "心率（HR）",
    suffixIcon: () => "（参考范围：60-100）",
    extraProps: {
      min: 0.1,
      precision: 1,
      step: 0.1,
      addonAfter: "（参考范围：60-100）",
    },
  },
];

const fieldsForm: Array<FieldType> = [
  {
    name: ["tabs", "right", "not_show"],
    type: "radioGroup",
    extraProps: {
      options: IsShow,
    },
  },
  {
    style: {
      marginBottom: -24,
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
