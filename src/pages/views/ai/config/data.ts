export const dataPosition = [
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
    value: (param: number) =>
      dataPosition.find((item) => item.code === param)?.name,
  },
  exist_tuber: {
    name: "结节",
    value: (param: number) =>
      tuberArray.find((item) => item.code === param)?.name,
  },
  tuber_num: {
    name: "结节大小",
    value: (param: number) =>
      tuberNum.find((item) => item.code === param)?.name,
  },
  tuber_size_x: {
    name: "结节大小横",
    value: (param: string) => param,
  },
  tuber_size_y: {
    name: "结节大小纵",
    value: (param: string) => param,
  },
} as const;
