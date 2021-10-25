// 颈动脉 是否显示
const IsShow: DEFINE.radioListTypes[] = [
  { label: "未显示", value: 1 },
  { label: "显示", value: 0 },
];

// 颈动脉 内径
const caInner: DEFINE.radioListTypes[] = [
  {
    label: "正常",
    value: 1,
  },
  {
    label: "增大",
    value: 2,
  },
  {
    label: "缩小",
    value: 3,
  },
];

// 颈动脉 内膜表面
const caInnerSurface: DEFINE.radioListTypes[] = [
  {
    label: "光滑",
    value: 1,
  },
  {
    label: "不光滑",
    value: 2,
  },
  {
    label: "未显示",
    value: 3,
  },
];

// 颈动脉 内中膜回声
const caInnerSound: DEFINE.radioListTypes[] = [
  {
    label: "正常",
    value: 1,
  },
  {
    label: "回声粗糙",
    value: 2,
  },
  {
    label: "回声不均",
    value: 3,
  },
];

// 颈动脉 管腔斑块
const caPipeSound: DEFINE.radioListTypes[] = [
  {
    label: "无",
    value: 1,
  },
  {
    label: "单发斑块",
    value: 2,
  },
  {
    label: "多发斑块",
    value: 3,
  },
];

// 颈动脉 斑块回声
const caPlaqueSound: DEFINE.radioListTypes[] = [
  {
    label: "强回声",
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
    label: "混合回声",
    value: 4,
  },
];

// 颈动脉 血流信号
const caPlaqueLose: DEFINE.radioListTypes[] = [
  {
    label: "未见缺失",
    value: 0,
  },
  {
    label: "斑块处缺失",
    value: 1,
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
  caInner,
  caInnerSurface,
  caInnerSound,
  caPipeSound,
  caPlaqueSound,
  caPlaqueLose,
  specialList,
};
