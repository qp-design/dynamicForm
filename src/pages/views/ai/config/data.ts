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

export const tuberArray = [
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
export const tuberNum = [
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

export const contentVideo = {
  tab_type: {
    name: "部位",
    value: (param: number | string) =>
      dataPosition.find((item) => item.code === param)?.name,
  },
  exist_tuber: {
    name: "结节",
    value: (param: number | string) =>
      tuberArray.find((item) => item.code === param)?.name,
  },
  tuber_num: {
    name: "结节数目",
    value: (param: number | string) =>
      tuberNum.find((item) => item.code === param)?.name,
  },
  tuber_size_x: {
    name: "横结节大小",
    value: (param: number | string) => param + "mm",
  },
  tuber_size_y: {
    name: "纵结节大小",
    value: (param: number | string) => param + "mm",
  },
  intimal_thickness: {
    name: "斑块内中膜厚度",
    value: (param: number) => param + "mm",
  },
  lumen_num: {
    name: "斑块数量",
    value: (param: number) => param,
  },
  patch_echoes: {
    name: "结节大小纵",
    value: (param: number | string) => param,
  },
  patch_size_long: {
    name: "斑块大小长",
    value: (param: number | string) => param + "mm",
  },
  patch_size_thick: {
    name: "斑块大小厚",
    value: (param: number | string) => param + "mm",
  },
} as const;
