import { Modal } from "antd";
const { confirm } = Modal;
export const modelHandler = (
  callback: () => void,
  title = "删除",
  text = "您确定要删除当前数据么",
  cancelCallback?: () => void
) => {
  confirm({
    title,
    content: text,
    onOk() {
      callback();
    },
    onCancel() {
      cancelCallback?.();
    },
  });
};
