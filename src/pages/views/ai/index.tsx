import { FC, useState } from "react";
import SearchJsx from "./components/search";
import User from "components/user/user";
import { Layout } from "antd";
import "./style/index.less";
import ResultJsx from "./components";
import DialogJsx from "../../../components/dialog";
import ResetPassWordJsx from "../../noAuthor/resetPassword";
import { resetPasswordForm } from "../../noAuthor/login/config";

const { Content } = Layout;

const Index: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">
        <SearchJsx />
        <User setIsShow={setIsShow} />
      </div>
      <div className="site-layout-space">
        <ResultJsx />
      </div>
      <DialogJsx
        resetProps={{
          title: "修改密码",
          visible: isShow,
          onCancel: () => setIsShow(false),
        }}
      >
        <ResetPassWordJsx fields={resetPasswordForm.slice(0, 1)} />
      </DialogJsx>
    </Content>
  );
};

export default Index;
