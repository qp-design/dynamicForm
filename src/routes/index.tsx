import camelCase from "lodash/camelCase";
import { routeComponentType } from "libs/types/routeComponentType";

class Api {
  BaseApi(params: any, postfix = "") {
    let BaseObj: any = {};
    params.keys().forEach((fileName: string) => {
      // 获取目录对象
      const ApiConfig = params(fileName);

      // 剥去文件名开头的 `'./` 和结尾的扩展名
      // 获取组件的 PascalCase 命名
      const BaseName = camelCase(
        fileName.replace(/^\.\/(\w+)\.\w+$/, `$1+${postfix}`)
      );
      BaseObj[BaseName] = ApiConfig.default || ApiConfig;
    });
    return BaseObj;
  }
}

const opt = new Api();

// @ts-ignore
const requireUrl = require.context(
  // 其文件目录的相对路径
  "../routes/config",
  // 是否查询其子目录
  false,
  // 匹配基础文件名的正则表达式
  /\.tsx$/
);

const routes: { [v: string]: Array<routeComponentType> } = opt.BaseApi(
  requireUrl
);
const routesConfig: Array<routeComponentType> = [];

Object.keys(routes).forEach((item) => {
  const getRoutes = routes[item];
  routesConfig.push(...getRoutes);
});

export default routesConfig;
