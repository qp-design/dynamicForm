import xhrFactory from "libs/http/config";

// 登陆
export const login = xhrFactory({
  url: "/engineer/login",
  method: "POST",
});

// 退出登录
export const logout = xhrFactory({
  url: "/engineer/logout",
  method: "GET",
});

// 修改密码
export const resetPassword = xhrFactory({
  url: "/engineer/reset-password",
  method: "POST",
});

// 验证码
export const captcha = xhrFactory({
  url: "/engineer/login-code",
  method: "GET",
  responseType: "blob",
});

// 验证码
export const mobile = xhrFactory({
  url: "/engineer/forget-password",
  method: "POST",
});
