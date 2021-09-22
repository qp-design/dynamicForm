import { Layout } from "antd";
import { ReactNode, FC } from "react";
import ParamsContextProvider from "libs/context/paramsProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface Props {
  children: ReactNode;
}

const MenuCom: FC<Props> = ({ children }: Props) => {
  const client = new QueryClient();

  return (
    <ParamsContextProvider>
      <QueryClientProvider client={client}>
        <Layout>{children}</Layout>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </ParamsContextProvider>
  );
};
export default MenuCom;
