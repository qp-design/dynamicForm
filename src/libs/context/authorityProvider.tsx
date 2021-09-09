import React, {ReactNode, useEffect, useState} from "react";
import {User} from "libs/types/user";
import {loginForm, resetForm} from "libs/types/login";
import {login, logout, resetPassword} from "libs/api/user-api";
// import { AxiosResponse } from "axios";
import util from "libs/utils/util";
import {submitType} from "libs/types/formField";
import {useMountedRef} from "libs/hooks";
import encryptPassword from "libs/utils/crpy";
import {modelHandler} from "../utils/model";

const AuthorityContext = React.createContext<{
  user: User | null;
  loginImplement: (...args: submitType<loginForm>) => void;
  loginOutImplement: () => void;
  // resetPasswordImeplement: (form: resetForm) => Promise<AxiosResponse>;
} | null>(null);
AuthorityContext.displayName = "AuthorityContext";

const AuthorityProvider = ({children}: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const mountedRef = useMountedRef();

  useEffect(() => {
    const value = util.getStorage("__authInfo__");
    if (!user && value && mountedRef.current) {
      setUser(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setDataMethod = (res: User) => {
    if (mountedRef.current) {
      setUser(res);
      util.setStorage("__authInfo__", res);
    }
  };

  const loginImplement = async (...args: submitType<loginForm>) => {
    const [value, suc, error] = args;
    const {password} = value;
    value.password = encryptPassword(password);
    try {
      const data = await login(value);
      if (data.status === 402) {
        modelHandler(
          () => {
            setDataMethod(data.data);
            PubSub.publish("isEditor", {
              title: "修改密码",
              closable: false,
            });
          },
          "友情提示",
          `为保证账户安全，请在5天内修改密码，谢谢。`,
          () => {
            setDataMethod(data.data);
          }
        );
      } else {
        setDataMethod(data.data);
      }
      suc();
    } catch (e) {
      error();
    }
  };

  const loginOutImplement = () =>
    logout()
      .then(() => {
        if (mountedRef.current) {
          setUser(null);
          util.clearStorage("__authInfo__");
        }
      })
      .catch(() => {
      });

  const resetPasswordImeplement = (params: resetForm) => {
    const {oldPassword, newPassword, again} = params;
    params.again = encryptPassword(again);
    params.oldPassword = encryptPassword(oldPassword);
    params.newPassword = encryptPassword(newPassword);
    return resetPassword(params);
  };

  return (
    <AuthorityContext.Provider
      value={{
        user,
        loginImplement,
        loginOutImplement,
        // resetPasswordImeplement,
      }}
    >
      {children}
    </AuthorityContext.Provider>
  );
};

export default AuthorityProvider;

export const useAuth = () => {
  const context = React.useContext(AuthorityContext);
  if (!context) {
    throw new Error("useAuth必须在AuthorityProvider中使用");
  }
  return context;
};
