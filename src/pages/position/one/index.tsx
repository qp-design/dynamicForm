import React, { FC } from "react";
import DynamicForm from "components/form";
import { one } from "pages/formConfig";
import { submitType } from "../../../libs/types/formField";

const OneJsx: FC = () => {
  console.log(one);

  function onConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    suc();
  }

  return <></>;
};
export default OneJsx;
