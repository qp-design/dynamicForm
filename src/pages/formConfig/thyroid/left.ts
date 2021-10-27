import { FieldType } from "libs/types/formField";
import {
  thyroidSize,
  thyroidEcho,
  echoesUniformity,
  existTuber,
  tuberNum,
  tuberEchoes,
  tuberShape,
  tuberEdge,
  tuberCalcification,
} from "constant/thyroidOptions";

const InnerForm: Array<FieldType> = [
  {
    style: {
      display: "inline-block",
    },
    name: ["tabs", "left", "tuber_size_x"],
    type: "number",
    rules: [{ required: true, message: "请输入横值" }],
    prefixIcon: "大者约横",
    suffixIcon: "mm",
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
    name: ["tabs", "left", "tuber_size_y"],
    type: "number",
    rules: [{ required: true, message: "请输入纵值" }],
    prefixIcon: " * 纵",
    suffixIcon: "mm",
    extraProps: {
      min: 0.1,
      precision: 1,
      step: 0.1,
    },
  },
];

const fieldsForm: Array<FieldType> = [
  {
    name: ["tabs", "left", "thyroid_size"],
    type: "radioGroup",
    label: "甲状腺大小",
    rules: [{ required: true, message: "请输入甲状腺大小" }],
    extraProps: {
      options: thyroidSize,
      config: {
        4: {
          visible: [["tabs", "left", "thyroid_size"]],
        },
      },
    },
  },
  {
    name: ["tabs", "left", "thyroid_echoes"],
    type: "radioGroup",
    label: "甲状腺回声",
    rules: [{ required: true, message: "请输入甲状腺回声" }],
    extraProps: {
      options: thyroidEcho,
    },
  },
  {
    name: ["tabs", "left", "echoes_uniformity"],
    type: "radioGroup",
    label: "回声均匀性",
    rules: [{ required: true, message: "请输入回声均匀性" }],
    extraProps: {
      options: echoesUniformity,
    },
  },
  {
    name: ["tabs", "left", "exist_tuber"],
    type: "radioGroup",
    label: "有无结节",
    rules: [{ required: true, message: "请输入有无结节" }],
    extraProps: {
      options: existTuber,
    },
  },
  {
    name: ["tabs", "left", "tuber_num"],
    type: "radioGroup",
    label: "结节数目",
    rules: [{ required: true, message: "请输入结节数目" }],
    extraProps: {
      options: tuberNum,
    },
  },
  {
    style: {
      // marginBottom: -24,
    },
    name: "",
    type: "complex",
    extraProps: {
      innerForm: InnerForm,
      label: "结节大小",
      required: true,
    },
  },
  {
    name: ["tabs", "left", "tuber_echoes"],
    type: "radioGroup",
    label: "结节回声",
    rules: [{ required: true, message: "请输入结节回声" }],
    extraProps: {
      options: tuberEchoes,
    },
  },
  {
    name: ["tabs", "left", "tuber_shape"],
    type: "radioGroup",
    label: "结节形态",
    rules: [{ required: true, message: "请输入结节形态" }],
    extraProps: {
      options: tuberShape,
    },
  },
  {
    name: ["tabs", "left", "tuber_edge"],
    type: "radioGroup",
    label: "结节边界",
    rules: [{ required: true, message: "请输入结节边界" }],
    extraProps: {
      options: tuberEdge,
    },
  },
  {
    name: ["tabs", "left", "tuber_calcification"],
    type: "radioGroup",
    label: "结节钙化",
    rules: [{ required: true, message: "请输入结节钙化" }],
    extraProps: {
      options: tuberCalcification,
    },
  },
];

const config = {
  fields: fieldsForm,
};

export default config;
