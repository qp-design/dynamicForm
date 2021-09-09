import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import { resetPasswordForm } from "pages/noAuthor/login/config";
import DynamicForm from "../form";
import { submitType } from "libs/types/formField";
import { resetForm } from "libs/types/login";
import { useAuth } from "libs/context/authorityProvider";
import { unstable_batchedUpdates } from "react-dom";

const DialogJsx = () => {
  const { resetPasswordImeplement } = useAuth();
  const [resetProps, setProps] = useState<{ [key in string]: unknown }>({});
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    PubSub.subscribe(
      "isEditor",
      (name: string, context: { [key in string]: unknown }) => {
        unstable_batchedUpdates(() => {
          setProps(context);
          setIsShow(true);
        });
      }
    );
    return () => PubSub.unsubscribe("isEditor");
  }, []);

  const onSubmit = (...args: submitType<resetForm>) => {
    const [value, suc, error] = args;
    resetPasswordImeplement(value)
      .then(() => {
        suc();
        setIsShow(false);
        if (resetProps.closable === false) window.location.reload();
      })
      .catch(() => {
        error();
      });
  };

  return (
    <Modal
      footer={null}
      maskClosable={false}
      visible={isShow}
      {...resetProps}
      onCancel={() => setIsShow(false)}
    >
      <DynamicForm
        saveText={"立即修改"}
        fields={resetPasswordForm}
        onSubmit={onSubmit}
      />
    </Modal>
  );
};
export default DialogJsx;
