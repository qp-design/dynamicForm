import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
} from "react";
import { paramsType } from "libs/types/queryParamsType";

const ParamsContext = createContext<{
  params: paramsType | null;
  setParams: Dispatch<paramsType | null>;
} | null>(null);

ParamsContext.displayName = "paramsContext";

const ParamsContextProvider = ({ children }: { children: ReactNode }) => {
  const [params, setParams] = useState<paramsType | null>(null);

  return (
    <ParamsContext.Provider
      value={{
        params,
        setParams,
      }}
    >
      {children}
    </ParamsContext.Provider>
  );
};

export default ParamsContextProvider;

export const useParamsContext = () => {
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error("useParamsContext调用必须在ParamsContextProvider里面");
  }
  return context;
};
