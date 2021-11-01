import React, { FC } from "react";
import DynamicForm from "components/form";
import { one } from "pages/formConfig";
import { submitType } from "../../../libs/types/formField";

const OneJsx: FC = () => {
  function onConfirm(...args: submitType) {
    const [value, suc] = args;
    console.log(value);
    suc();
  }

  return <DynamicForm {...one} onSubmit={onConfirm} />;
};
export default OneJsx;
