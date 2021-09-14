import React from "react";
import InputNumber from "antd/lib/input-number";
import { FormInstance } from "antd";

export default function NumberField({
  form,
  ...extraProps
}: {
  form: FormInstance;
}) {
  return <InputNumber {...extraProps} />;
}
