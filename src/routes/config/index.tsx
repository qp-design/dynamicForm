import { USER_INDEX } from "../routesPath";
import Index from "pages/views/ai";
import { routeComponentType } from "libs/types/routeComponentType";
const index: Array<routeComponentType> = [
  {
    id: 1,
    title: "应用管理",
    path: USER_INDEX,
    exact: true,
    icon: "solution",
    component: Index,
  },
];
export default index;
