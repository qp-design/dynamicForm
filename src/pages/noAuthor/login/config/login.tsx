import Capture from "../capture";
import { FieldType } from "libs/types/formField";

const fieldsForm: Array<FieldType> = [
  {
    name: "sign",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入账号" }],
    extraProps: {
      placeholder: "账号",
      style: {
        height: 50,
        background: "#f2f2f2",
      },
      size: "large",
    },
  },
  {
    name: "password",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入密码" }],
    extraProps: {
      placeholder: "密码",
      style: {
        marginTop: 10,
        height: 50,
        background: "#f2f2f2",
      },
      type: "password",
      size: "large",
    },
  },
  {
    name: "code",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入验证码" }],
    extraProps: {
      placeholder: "验证码",
      className: "diyHeightInput",
      addonAfter: <Capture />,
      size: "large",
    },
  },
];

export default fieldsForm;
