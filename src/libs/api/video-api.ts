import xhrFactory from "libs/http/config";

// 查看报告
export const videoQuery = xhrFactory({
  url: "/engineer/report",
  method: "GET",
});

// 工程师 - 获取视频凭证（有效期）
export const vidPlayAuth = xhrFactory({
  url: "/engineer/vid-play-auth",
  method: "GET",
});
