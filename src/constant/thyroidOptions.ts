// 甲状腺大小
const thyroidSize: DEFINE.radioListTypes[] = [
  {
    label: "正常",
    value: 0,
  },
  {
    label: "增大",
    value: 1,
  },
  {
    label: "缩小",
    value: 2,
  },
  {
    label: "已切除",
    value: 3,
  },
  {
    label: "未显示",
    value: 4,
  },
];

// 甲状腺回声
const thyroidEcho: DEFINE.radioListTypes[] = [
  {
    label: "正常",
    value: 0,
  },
  {
    label: "减低",
    value: 1,
  },
  {
    label: "增高",
    value: 2,
  },
  {
    label: "增粗",
    value: 3,
  },
];

// 回声均匀性
const echoesUniformity: DEFINE.radioListTypes[] = [
  {
    label: "均匀",
    value: 0,
  },
  {
    label: "不均匀",
    value: 1,
  },
];

// 有无结节
const existTuber: DEFINE.radioListTypes[] = [
  {
    label: "有",
    value: 1,
  },
  {
    label: "无",
    value: 0,
  },
];

// 结节数目
const tuberNum: DEFINE.radioListTypes[] = [
  {
    label: "单发",
    value: 0,
  },
  {
    label: "多发",
    value: 1,
  },
];

// 结节回声
const tuberEchoes: DEFINE.radioListTypes[] = [
  {
    label: "无回声",
    value: 0,
  },
  {
    label: "低回声",
    value: 1,
  },
  {
    label: "等回声",
    value: 2,
  },
  {
    label: "高回声",
    value: 3,
  },
  {
    label: "混合回声",
    value: 4,
  },
];

// 结节形态
const tuberShape: DEFINE.radioListTypes[] = [
  {
    label: "规则",
    value: 10,
  },
  {
    label: "不规则",
    value: 1,
  },
];

// 结节边界
const tuberEdge: DEFINE.radioListTypes[] = [
  {
    label: "边界清晰",
    value: 0,
  },
  {
    label: "边界模糊",
    value: 1,
  },
];

// 结节钙化
const tuberCalcification: DEFINE.radioListTypes[] = [
  {
    label: "无钙化点",
    value: 0,
  },
  {
    label: "彗尾",
    value: 10,
  },
  {
    label: "细小钙化",
    value: 4,
  },
  {
    label: "粗大钙化",
    value: 5,
  },
];

export {
  thyroidSize,
  thyroidEcho,
  echoesUniformity,
  existTuber,
  tuberNum,
  tuberEchoes,
  tuberShape,
  tuberEdge,
  tuberCalcification,
};
