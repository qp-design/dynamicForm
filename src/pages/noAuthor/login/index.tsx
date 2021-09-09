import React, { FC } from "react";
import { loginFormParam } from "./config";
import DynamicForm from "components/form";
import AlignMiddleCenter from "components/alignMiddleCenter";
import { useAuth } from "libs/context/authorityProvider";
import { useBackground } from "libs/hooks";
import "pages/noAuthor/login/loginStyle/index.less";

const Login: FC = () => {
  const { loginImplement } = useAuth();
  const onConfirm = (...args: Parameters<typeof loginImplement>) =>
    loginImplement(...args);

  useBackground("#20222A");

  return (
    <AlignMiddleCenter colNum={8}>
      <div className="loginStyle">
        <h1>SoundWise后台|登录</h1>
        <DynamicForm
          saveText={"登录"}
          wrapperCol={{ span: 24, offset: 0 }}
          formItemLayout={{ labelCol: { span: 0 }, wrapperCol: { span: 24 } }}
          onSubmit={onConfirm}
          fields={loginFormParam}
        />
      </div>
    </AlignMiddleCenter>
  );
};
export default Login;
