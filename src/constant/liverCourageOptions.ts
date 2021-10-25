// 胆囊 是否显示
const lcIsShow: DEFINE.radioListTypes[] = [
  { label: "未显示", value: 1 },
  { label: "显示", value: 2 },
];

// 肝胆 大小
const lcSize: DEFINE.radioListTypes[] = [
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

// 肝胆 回声
const lcSound: DEFINE.radioListTypes[] = [
  {
    label: "正常",
    value: 1,
  },
  {
    label: "细密",
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

// 肝胆 回声均匀性
const lcSoundEven: DEFINE.radioListTypes[] = [
  {
    label: "均匀",
    value: 1,
  },
  {
    label: "不均匀",
    value: 2,
  },
  {
    label: "后方衰减",
    value: 3,
  },
];

// 肝胆 肝内管道
const lcPipe: DEFINE.radioListTypes[] = [
  {
    label: "尚清",
    value: 1,
  },
  {
    label: "欠清",
    value: 2,
  },
];

// 肝胆 肝包膜
const lcFilm: DEFINE.radioListTypes[] = [
  {
    label: "尚光整",
    value: 1,
  },
  {
    label: "欠清",
    value: 2,
  },
  {
    label: "凹凸不平",
    value: 3,
  },
];

// 肝胆 肝内血流
const lcBold: DEFINE.radioListTypes[] = [
  {
    label: "尚清",
    value: 1,
  },
  {
    label: "欠清",
    value: 2,
  },
];

// 肝胆 肝周积液
const lcLiquid: DEFINE.radioListTypes[] = [
  {
    label: "有",
    value: 1,
  },
  {
    label: "无",
    value: 2,
  },
];

// 肝胆 有无病灶
const lcFocus: DEFINE.radioListTypes[] = [
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

// 肝胆 病灶数目
const lcFocusNum: DEFINE.radioListTypes[] = [
  {
    label: "单发",
    value: 1,
  },
  {
    label: "多发",
    value: 2,
  },
];

// 肝胆 病灶回声
const lcEcho: DEFINE.radioListTypes[] = [
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

// 肝胆 病灶形态
const lcForm: DEFINE.radioListTypes[] = [
  {
    label: "规则",
    value: 1,
  },
  {
    label: "欠规则",
    value: 2,
  },
];

// 肝胆 病灶边界
const lcBorder: DEFINE.radioListTypes[] = [
  {
    label: "尚清",
    value: 1,
  },
  {
    label: "欠清",
    value: 2,
  },
];

// 肝胆 后方回声
const lcAfterSound: DEFINE.radioListTypes[] = [
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

// 胆囊 回声
const courageSound: DEFINE.radioListTypes[] = [
  {
    label: "透声可",
    value: 101,
  },
  {
    label: "透声欠佳",
    value: 102,
  },
];

// 胆囊 胆壁
const couGalWall: DEFINE.radioListTypes[] = [
  {
    label: "光滑",
    value: 1,
  },
  {
    label: "毛躁",
    value: 2,
  },
  {
    label: "增厚",
    value: 3,
  },
];

// 胆囊 病灶回声
const couAfterBackSound: DEFINE.radioListTypes[] = [
  {
    label: "强回声",
    value: 101,
  },
  {
    label: "等回声",
    value: 102,
  },
  {
    label: "低回声",
    value: 103,
  },
  {
    label: "混合回声",
    value: 104,
  },
];

// 胆囊 后方回声
const couAfterSound: DEFINE.radioListTypes[] = [
  {
    label: "无改变",
    value: 101,
  },
  {
    label: "声影",
    value: 102,
  },
  {
    label: "慧尾",
    value: 103,
  },
];

export {
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
  courageSound,
  couGalWall,
  couAfterBackSound,
  couAfterSound,
};
