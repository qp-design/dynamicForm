export const dataPosition = [
  {
    code: -1,
    name: "—",
  },
  {
    code: 1,
    name: "左侧",
  },
  {
    code: 2,
    name: "右侧",
  },
  {
    code: 3,
    name: "峡部",
  },
];

const tuberArray = [
  {
    code: -1,
    name: "—",
  },
  {
    code: 0,
    name: "无",
  },
  {
    code: 1,
    name: "有",
  },
];
const tuberNum = [
  {
    code: -1,
    name: "—",
  },
  {
    code: 0,
    name: "单发",
  },
  {
    code: 1,
    name: "多发",
  },
];

const luminalPatchEnum = [
  {
    code: -1,
    name: "—",
  },
  {
    code: 0,
    name: "未知",
  },
  {
    code: 1,
    name: "无",
  },
  {
    code: 2,
    name: "可见单发斑块",
  },
  {
    code: 3,
    name: "可见多发斑块",
  },
];

const patchEchoesEnum = [
  {
    code: -1,
    name: "—",
  },
  {
    code: 0,
    name: "未知",
  },
  {
    code: 1,
    name: "强回声",
  },
  {
    code: 2,
    name: "等回声",
  },
  {
    code: 3,
    name: "低回声",
  },
  {
    code: 4,
    name: "混合回声",
  },
];

export const contentVideo = {
  tab_type: {
    name: "部位",
    value: (param: number) =>
      dataPosition.find((item) => item.code === param)?.name || "",
  },
  exist_tuber: {
    name: "结节",
    value: (param: number) =>
      tuberArray.find((item) => item.code === param)?.name || "",
  },
  tuber_num: {
    name: "结节数目",
    value: (param: number) =>
      tuberNum.find((item) => item.code === param)?.name || "",
  },
  tuber_size_x: {
    name: "横结节大小",
    value: (param: number) => param + "mm",
  },
  tuber_size_y: {
    name: "纵结节大小",
    value: (param: number) => param + "mm",
  },
  intimal_thickness: {
    name: "斑块内中膜厚度",
    value: (param: number) => param + "mm",
  },
  luminal_patch: {
    name: "管腔斑块",
    value: (param: number) =>
      luminalPatchEnum.find((item) => item.code === param)?.name || "",
  },
  patch_echoes: {
    name: "斑块回声",
    value: (param: number) =>
      patchEchoesEnum.find((item) => item.code === param)?.name || "",
  },
  patch_size_long: {
    name: "斑块大小长",
    value: (param: number) => param + "mm",
  },
  patch_size_thick: {
    name: "斑块大小厚",
    value: (param: number) => param + "mm",
  },
} as const;
