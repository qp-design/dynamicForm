import fetchImplement from 'libs/http/index';
import { defaultPath } from 'libs/http/config/originPath'
import qs from 'qs'

const xhrFactory = ({url = '', method = 'GET', contextType = 'application/json'}) =>
  (params = {}, signal?: AbortSignal | null) => {
    let appendPath = '';
    const config : RequestInit = {
      signal,
      method,
      headers: {
        'Content-Type': contextType,
      },
    };

    params = removeEmptyParams(params);

    if (method === 'GET') {
      appendPath += `?${qs.stringify(params)}`;
    } else if (contextType === 'application/x-www-form-urlencoded') {
      config.body = qs.stringify(params);
    } else {
      config.body = JSON.stringify(params);
    }
    return fetchImplement(defaultPath + url + appendPath, config)
  };

/**
 * 去除空value的参数
 * @returns {*}
 * @param target
 */
type ParamsTypes = Array<unknown> | { [k: string]: unknown };

const removeEmptyParams = (target: any) => {
  if (target === null) return null;
  if (typeof target !== "object") {
    return target;
  }

  const newParamsTarget: ParamsTypes = Array.isArray(target) ? [] : {};
  for (let prop in target) {
    /**
     * 为空删除key
     */
    if (target.hasOwnProperty(prop)) {
      if ([undefined, ""].includes(target[prop])) {
        delete target[prop];
      } else {
        /**
         * 驼峰转下划线
         * @type {string}
         */
        const p = toLine(prop);
        // @ts-ignore
        newParamsTarget[p] = removeEmptyParams(target[prop]);
      }
    }
  }
  return newParamsTarget;
};

/**
 * 驼峰转换下划线
 * @param name
 * @returns {string}
 */
function toLine(name: string): string {
  return name.replace(/([A-Z])/g, "_$1").toLowerCase();
}

export default xhrFactory;
