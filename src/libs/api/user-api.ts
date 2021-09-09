import xhrFactory from "libs/http/config";

// 登陆
export const login = xhrFactory({
  url: "/login",
  method: "POST",
});

// 退出登录
export const logout = xhrFactory({
  url: "/logout",
  method: "GET",
});

// 修改密码
export const resetPassword = xhrFactory({
  url: "/reset_pwd",
  method: "POST",
});

// 验证码
export const captcha = xhrFactory({
  url: "/captcha",
  method: "GET",
  // responseType: "blob",
});
