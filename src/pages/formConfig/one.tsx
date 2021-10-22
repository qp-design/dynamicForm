import { FieldType } from "libs/types/formField";
import { FormInstance } from "antd";

type fucType = (value: unknown) => { [v: string]: unknown };
const setFieldsImp = (config: fucType, { setFieldsValue }: FormInstance) => ({
  validator(_: unknown, value: unknown) {
    setFieldsValue(config(value));
    return Promise.resolve();
  },
});

const InnerForm: Array<FieldType> = [
  {
    style: {
      display: "inline-block",
      width: 200,
    },
    name: ["oneField", "tet12"],
    type: "text",
    rules: [{ required: true, message: "请输入名称3" }],
    extraProps: {
      prefix: "厚",
      suffix: "mm",
      placeholder: "请输入名称3",
    },
  },
  {
    style: {
      display: "inline-block",
      width: 200,
    },
    name: ["oneField", "tet"],
    type: "text",
    prefixIcon: " ✖ ️",
    rules: [{ required: true, message: "请输入名称3" }],
    extraProps: {
      prefix: "厚",
      suffix: "mm",
      placeholder: "请输入名称3",
      style: {
        // width: 'calc(30% - 8px)',
      },
    },
  },
];

const InnerFormTwo: Array<FieldType> = [
  {
    style: {
      display: "inline-block",
      width: 60,
    },
    name: ["twoField", "checkOne"],
    type: "checkbox",
    rules: [{ required: true, message: "请输入名称3" }],
    extraProps: {
      label: "魔术",
      prefix: "厚",
      suffix: "mm",
      placeholder: "请输入名称3",
    },
  },
  {
    style: {
      display: "inline-block",
      width: 200,
    },
    name: ["twoField", "checkTwo"],
    type: "text",
    calIsDisabled: (getFieldValue) => !getFieldValue(["twoField", "checkOne"]),
    rules: [{ required: true, message: "请输入名称3" }],
    extraProps: {
      disabled: true,
      prefix: "厚",
      suffix: "mm",
      placeholder: "请输入名称3",
    },
  },
];

const fieldsForm: Array<FieldType> = [
  {
    colon: false,
    name: ["complex", "isVisible"],
    type: "checkbox",
    label: " ",
    rules: [
      setFieldsImp.bind(null, (value: unknown) => ({
        test: value,
      })),
    ],
    extraProps: {
      label: "未显示",
      placeholder: "请输入名称1",
      config: {
        true: {
          visible: [["complex", "isVisible"], "test", "default"],
        },
      },
    },
  },
  {
    noStyle: true,
    name: "",
    type: "complex",
    extraProps: {
      innerForm: InnerForm,
      label: "结节大小",
      labelCol: { span: 8 },
      required: true,
    },
  },
  {
    noStyle: true,
    name: "",
    type: "complex",
    extraProps: {
      innerForm: InnerFormTwo,
      label: "是否禁用",
      labelCol: { span: 8 },
      required: true,
    },
  },
  {
    style: {
      marginTop: 20,
    },
    name: "three",
    type: "text",
    label: "心率(HR)",
    rules: [{ required: true, message: "请输入名称3" }],
    extraProps: {
      suffix: "(参考范围： 60 - 100)",
      // <Input prefix="￥" suffix="RMB" />
      placeholder: "请输入名称3",
    },
  },
  {
    colon: false,
    name: "test",
    type: "checkbox",
    label: " ",
    rules: [
      setFieldsImp.bind(null, (value: unknown) => ({
        complex: {
          isVisible: value,
        },
      })),
    ],
    extraProps: {
      label: "正常",
      placeholder: "请输入名称1",
      config: {
        true: {
          visible: [["complex", "isVisible"], "test", "default"],
        },
      },
    },
  },
  {
    colon: false,
    name: "testOne",
    type: "checkbox",
    label: " ",
    extraProps: {
      label: "选中输入名称4",
      placeholder: "请输入名称1",
    },
  },
  {
    name: "default",
    type: "text",
    label: "名称4",
    rules: [{ required: true, message: "请输入名称4" }],
    calIsVisible: (getFieldValue) => getFieldValue("testOne"),
    extraProps: {
      placeholder: "请输入名称3",
    },
  },
  {
    name: "selectName",
    type: "select",
    label: "select名称",
    rules: [{ required: true, message: "请输入名称4" }],
    extraProps: {
      placeholder: "请输入名称3",
      options: [
        {
          label: "选项1",
          value: 1,
        },
        {
          label: "选项2",
          value: 2,
        },
      ],
    },
  },
];

const config = {
  saveText: "下一步",
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  fields: fieldsForm,
};

export default config;
