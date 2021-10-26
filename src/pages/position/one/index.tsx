import React, { FC } from "react";
import DynamicForm from "components/form";
import { two as one } from "pages/formConfig";
import { submitType } from "../../../libs/types/formField";

const OneJsx: FC = () => {
  function onConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, error);
    suc();
  }

  return <DynamicForm {...one} onSubmit={onConfirm} />;
};
export default OneJsx;
