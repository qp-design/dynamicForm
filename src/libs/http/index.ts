import { message } from "antd";

export default function fetchImplement(
  url: RequestInfo,
  config: RequestInit,
  responseType: string
): Promise<any> {
  return new Promise(function (resolve, reject) {
    fetch(url, config)
      .then(async (response) => {
        if (response.status === 401) {
          // 没有登录
          reject({ message: "请重新登录" });
        }
        let data;
        switch (responseType) {
          case "blob":
            data = await response.blob();
            resolve(data);
            return;
          case "text":
            data = await response.text();
            break;
          case "formData":
            data = await response.formData();
            break;
          default:
            data = await response.json();
            break;
        }
        if (data.code === 200) {
          if ([null].includes(data.data)) {
            message.success(data.msg);
          }
          resolve(data.data);
        } else {
          throw new Error(data.msg);
        }
      })
      .catch((error) => {
        message.warning(error.message);
        reject(error);
      });
  });
}
