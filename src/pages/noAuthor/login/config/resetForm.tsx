import { FieldType } from "libs/types/formField";

const fieldsForm: Array<FieldType> = [
  {
    name: "oldPassword",
    type: "text",
    label: "原密码",
    rules: [{ required: true, message: "请输入原密码" }],
    placeholder: "请输入原密码",
    extraProps: {
      size: "large",
      type: "password",
    },
  },
  {
    name: "newPassword",
    type: "text",
    label: "新密码",
    placeholder: "请输入新密码",
    rules: [
      {
        required: true,
        pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/,
        message: "请输入数组和字母，且长度至少8位",
      },
    ],
    extraProps: {
      type: "password",
      size: "large",
    },
  },
  {
    name: "again",
    type: "text",
    label: "确认密码",
    placeholder: "请再次输入确认密码",
    rules: [
      {
        required: true,
        pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/,
        message: "请输入数组和字母，且长度至少8位",
      },
    ],
    extraProps: {
      type: "password",
      size: "large",
    },
  },
];

export default fieldsForm;
