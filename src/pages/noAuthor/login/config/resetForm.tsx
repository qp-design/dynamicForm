import { FieldType } from "libs/types/formField";
import CodeJsx from "components/code";
import { FormInstance } from "antd";

const fieldsForm: Array<FieldType> = [
  {
    name: "password",
    type: "text",
    label: "新密码",
    rules: [
      {
        required: true,
        pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/,
        message: "请输入数组和字母，且长度至少8位",
      },
    ],
    extraProps: {
      placeholder: "请输入新密码",
      type: "password",
    },
  },
  {
    name: "mobile",
    type: "text",
    label: "手机号",
    rules: [{ required: true, message: "请输入手机号" }],
    extraProps: {
      placeholder: "请输入手机号",
    },
  },
  {
    name: "code",
    type: "text",
    label: "验证码",
    rules: [{ required: true, message: "请输入验证码" }],
    extraProps: {
      placeholder: "请输入验证码",
      addonAfter: (form: FormInstance) => {
        return <CodeJsx form={form} />;
      },
    },
  },
];

export default fieldsForm;
