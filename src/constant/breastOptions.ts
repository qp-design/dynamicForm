// 颈动脉 是否显示
const IsShow: DEFINE.radioListTypes[] = [
  { label: "未显示", value: 1 },
  { label: "显示", value: 2 },
];

// 腺体厚度
const glandThickness: DEFINE.radioListTypes[] = [
  {
    label: "正常",
    value: 1,
  },
  {
    label: "增厚",
    value: 2,
  },
  {
    label: "变薄",
    value: 3,
  },
];

// 腺体回声
const glandEcho: DEFINE.radioListTypes[] = [
  {
    label: "正常",
    value: 1,
  },
  {
    label: "减低",
    value: 2,
  },
  {
    label: "增粗",
    value: 3,
  },
  {
    label: "增强",
    value: 4,
  },
];

// 乳腺 回声均匀性
const echoUniformity: DEFINE.radioListTypes[] = [
  {
    label: "均匀",
    value: 1,
  },
  {
    label: "不均匀",
    value: 2,
  },
];

// 乳腺 乳腺导管
const breastDuct: DEFINE.radioListTypes[] = [
  {
    label: "正常",
    value: 1,
  },
  {
    label: "局部增宽",
    value: 2,
  },
];

// 乳腺 有无结节
const isNodule: DEFINE.radioListTypes[] = [
  {
    label: "有",
    value: 1,
  },
  {
    label: "无",
    value: 2,
  },
  {
    label: "欠清",
    value: 3,
  },
];

// 乳腺 结节数目
const noduleNum: DEFINE.radioListTypes[] = [
  {
    label: "单发",
    value: 1,
  },
  {
    label: "多发",
    value: 2,
  },
];

// 乳腺 结节回声
const noduleCho: DEFINE.radioListTypes[] = [
  {
    label: "高回声",
    value: 1,
  },
  {
    label: "等回声",
    value: 2,
  },
  {
    label: "低回声",
    value: 3,
  },
  {
    label: "无回声",
    value: 4,
  },
  {
    label: "混合回声",
    value: 5,
  },
];

// 乳腺 结节形态
const noduleForm: DEFINE.radioListTypes[] = [
  {
    label: "规则",
    value: 1,
  },
  {
    label: "欠规则",
    value: 2,
  },
];

// 乳腺 结节边界
const noduleBorder: DEFINE.radioListTypes[] = [
  {
    label: "尚清",
    value: 1,
  },
  {
    label: "欠清",
    value: 2,
  },
];

// 乳腺 结节钙化
const noduleCalcification: DEFINE.radioListTypes[] = [
  {
    label: "无钙化",
    value: 1,
  },
  {
    label: "细小钙化",
    value: 2,
  },
  {
    label: "粗大钙化",
    value: 3,
  },
  {
    label: "簇状钙化",
    value: 4,
  },
  {
    label: "边缘钙化",
    value: 5,
  },
];

// 乳腺 后方回声
const backEcho: DEFINE.radioListTypes[] = [
  {
    label: "无改变",
    value: 1,
  },
  {
    label: "衰减",
    value: 2,
  },
  {
    label: "增强",
    value: 3,
  },
];

const specialList: any[] = [
  {
    name: "intimal_thickness",
    unit: " mm",
  },
  {
    name: "peak_systolic_velocity",
  },
  {
    name: "pulsatility_index",
  },
  {
    name: "resistance_index",
  },
  {
    name: "heart_rate",
  },
];

export {
  IsShow,
  glandThickness,
  glandEcho,
  echoUniformity,
  breastDuct,
  isNodule,
  noduleNum,
  noduleCho,
  noduleForm,
  noduleBorder,
  noduleCalcification,
  backEcho,
  specialList,
};
