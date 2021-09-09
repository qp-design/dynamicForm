import ReactDOM from "react-dom";
import { Modal } from "antd";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  otherProps?: { [v: string]: unknown };
}

const diaglogCom = (
  dialogComponent: (...args: Array<any>) => ReactNode,
  { title }: Props
): void => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  function render() {
    ReactDOM.render(
      <Modal
        title={title}
        visible={true}
        footer={null}
        onCancel={destroyDialog}
      >
        {dialogComponent(destroyDialog)}
      </Modal>,
      container
    );
  }

  function destroyDialog() {
    // Allow calling chain to roll up, and then destroy component
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
    }, 10);
  }

  render();
};
export default diaglogCom;
