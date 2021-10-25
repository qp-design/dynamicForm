const tabSwitchList: Array<DEFINE.tabSwitchTypes> = [
  {
    key: 1,
    name: "tabs",
    desc: "超声所见",
  },
  {
    key: 2,
    name: "cs_tips",
    desc: "超声提示",
  },
  {
    key: 3,
    name: "health_proposal",
    desc: "健康建议",
  },
  {
    key: 4,
    name: "signature",
    desc: "医师签名",
  },
];

const tabsSelectList: DEFINE.radioListTypes[] = [
  {
    label: "肝脏左叶",
    value: 1,
  },
  {
    label: "肝脏右叶",
    value: 2,
  },
  {
    label: "胆囊",
    value: 3,
  },
];

// 甲状腺 tabs
const tabsThyropathy: DEFINE.radioListTypes[] = [
  {
    label: "左侧",
    value: 1,
  },
  {
    label: "右侧",
    value: 2,
  },
  {
    label: "峡部",
    value: 3,
  },
];

// 颈动脉 tabs
const tabsCarotid: DEFINE.radioListTypes[] = [
  {
    label: "左侧",
    value: 1,
  },
  {
    label: "右侧",
    value: 2,
  },
];

// 乳腺tabs
const tabsBreast: DEFINE.radioListTypes[] = [...tabsCarotid];

const tabsLiverCourage: DEFINE.radioListTypes[] = [
  {
    label: "肝脏左叶",
    value: 1,
  },
  {
    label: "肝脏右叶",
    value: 2,
  },
  {
    label: "胆囊",
    value: 3,
  },
];

const preViewTitle: DEFINE.radioListTypes[] = [
  {
    label: "甲状腺",
    value: "1",
  },
  {
    label: "颈动脉",
    value: "2",
  },
  {
    label: "肝胆",
    value: "3",
  },
  {
    label: "",
    value: "4",
  },
  {
    label: "",
    value: "5",
  },
  {
    label: "乳腺",
    value: "6",
  },
];

export const commomTypes: string = "3";

export {
  tabSwitchList,
  tabsSelectList,
  tabsThyropathy,
  tabsCarotid,
  tabsBreast,
  tabsLiverCourage,
  preViewTitle,
};
