import { Modal } from "antd";
import { ReactNode } from "react";

interface DialogType {
  children: ReactNode;
  resetProps: { [v: string]: unknown };
}

const DialogJsx = ({ children, resetProps }: DialogType) => {
  return (
    <Modal footer={null} maskClosable={false} {...resetProps}>
      {children}
    </Modal>
  );
};

export default DialogJsx;
