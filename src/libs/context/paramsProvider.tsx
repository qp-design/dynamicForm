import React, { createContext, useState, useContext, ReactNode } from "react";
import { paramsType } from "libs/types/queryParamsType";

const ParamsContext = createContext<{
  params: paramsType;
  setParams: <T>(params: T) => void;
} | null>(null);

ParamsContext.displayName = "paramsContext";

const ParamsContextProvider = ({ children }: { children: ReactNode }) => {
  const [params, setParams] = useState<any>(null);

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
