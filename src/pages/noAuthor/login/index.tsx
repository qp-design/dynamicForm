import React, { FC } from "react";
import { loginFormParam } from "./config";
import DynamicForm from "components/form";
import AlignMiddleCenter from "components/alignMiddleCenter";
import { useAuth } from "libs/context/authorityProvider";
import { useBackground } from "libs/hooks";
import "pages/noAuthor/login/loginStyle/index.less";
import logo from 'static/logo.png'

const Login: FC = () => {
  const { loginImplement } = useAuth();
  const onConfirm = (...args: Parameters<typeof loginImplement>) =>
    loginImplement(...args);

  useBackground("#20222A");

  return (
    <AlignMiddleCenter colNum={8}>
      <div className="loginStyle">
        <img
          alt={'logo'}
          width={160}
          src={logo}
        />
        <h1>诊断医师平台</h1>
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
