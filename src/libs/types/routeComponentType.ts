import { ReactType } from "react";
export type routeComponentType = {
  id: number;
  title: string;
  path: string;
  exact?: boolean;
  icon: string;
  component: ReactType;
};

export type appType = {
  appDesc: string;
  appName: string;
  appUrl: string;
  id: string;
};
