import { Layout } from "antd";
import { ReactNode, FC } from "react";
import ParamsContextProvider from "libs/context/paramsProvider";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children: ReactNode;
}

const MenuCom: FC<Props> = ({ children }: Props) => {
  const client = new QueryClient();

  return (
    <ParamsContextProvider>
      <QueryClientProvider client={client}>
        <Layout>{children}</Layout>
      </QueryClientProvider>
    </ParamsContextProvider>
  );
};
export default MenuCom;
