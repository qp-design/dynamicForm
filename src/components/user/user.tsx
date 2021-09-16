import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dispatch, memo, useState } from "react";
import { modelHandler } from "libs/utils/model";
import { useAuth } from "libs/context/authorityProvider";

const User = memo(({ setIsShow }: { setIsShow: Dispatch<boolean> }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { user, loginOutImplement } = useAuth();
  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag);
  };

  const logoutHandler = () => {
    modelHandler(loginOutImplement, "退出", `确定退出登录状态么`);
  };

  const resetHandler = () => {
    setIsShow(true);
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
          <span style={{ paddingLeft: 10 }}>{user?.name}</span> <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
});

export default User;
