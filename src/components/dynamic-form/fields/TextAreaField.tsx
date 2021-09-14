import React from "react";
import Input from "antd/lib/input";
import { FormInstance } from "antd";

export default function TextAreaField({
  form,
  ...extraProps
}: {
  form: FormInstance;
}) {
  return <Input.TextArea {...extraProps} />;
}
