import Capture from "../capture";
import { FieldType } from "libs/types/formField";
import user from "static/user.png";
import password from "static/password.png";
import CheckboxGroupField from "components/dynamic-form/fields/CheckboxGroupField";
import Button from "antd/lib/button";
import { useAuth } from "../../../../libs/context/authorityProvider";

const fieldsForm: Array<FieldType> = [
  {
    name: "mobile",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入手机号" }],
    extraProps: {
      prefix: <img src={user} width={20} />,
      placeholder: "手机号",
      style: {
        height: 40,
      },
    },
  },
  {
    name: "password",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入登陆密码" }],
    extraProps: {
      prefix: <img src={password} width={20} />,
      placeholder: "请输入登陆密码",
      style: {
        height: 40,
      },
      type: "password",
    },
  },
  {
    name: "code",
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入验证码" }],
    style: {
      marginBottom: 15,
    },
    extraProps: {
      placeholder: "请输入验证码",
      className: "diyHeightInput",
      addonAfter: () => <Capture />,
    },
  },
  {
    name: "remember",
    type: "slot",
    style: {
      marginBottom: 0,
    },
    extraProps: {
      diyRender({ ...restProps }) {
        return <DiyRender {...restProps} />;
      },
      options: [{ label: "记住密码", value: 1 }],
    },
  },
];

const DiyRender = ({ ...restProps }) => {
  const { setShowModel } = useAuth();
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <CheckboxGroupField {...restProps} />
      <Button
        type="link"
        onClick={() => setShowModel(true)}
        style={{
          fontWeight: 700,
          lineHeight: 1,
          padding: 0,
          height: "auto",
        }}
      >
        忘记密码
      </Button>
    </div>
  );
};
export default fieldsForm;
