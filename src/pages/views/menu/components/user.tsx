import { Menu, Dropdown, Button, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { memo, useState } from "react";
// import styled from "styled-components";
import { modelHandler } from "libs/utils/model";
import { useAuth } from "libs/context/authorityProvider";

// const UserDiv = styled.div`
//   float: right;
//   width: 140px;
//   height: 31px;
// `;
const User = memo(() => {
  const [visible, setVisible] = useState<boolean>(false);
  const { user, loginOutImplement } = useAuth();
  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag);
  };

  const logoutHandler = () => {
    modelHandler(loginOutImplement, "退出", `确定退出登录状态么`);
  };

  const resetHandler = () => {
    // PubSub.publish("isEditor", {
    //   title: "修改密码",
    //   maskClosable: true,
    // });
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={resetHandler}>
        修改密码
      </Menu.Item>
      <Menu.Item key="2" onClick={logoutHandler}>
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown
        overlay={menu}
        onVisibleChange={handleVisibleChange}
        visible={visible}
      >
        <Button type={"link"}>
          <Avatar src={user?.avator} />
          <span style={{ paddingLeft: 10 }}>{user?.name}</span> <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
});

export default User;
