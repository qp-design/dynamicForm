import xhrFactory from "libs/http/config";

// 登陆
export const videoQuery = xhrFactory({
  url: "/engineer/report",
  method: "GET",
});
