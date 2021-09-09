import { Layout } from "antd";
import React, { ReactNode, FC, useCallback } from "react";
import Logo from "pages/views/menu/components/logo";
import User from "pages/views/menu/components/user";
import NavCom from "pages/views/menu/components/nav";

const { Header } = Layout;

interface Props {
  children: ReactNode;
}

const MenuCom: FC<Props> = ({ children }: Props) => {
  const setActivedMenu = useCallback((url) => {
    dispatchActiveMange(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <Header className="header">
        <Logo />
        <User />
      </Header>
      <Layout>{children}</Layout>
    </Layout>
  );
};
export default MenuCom;
