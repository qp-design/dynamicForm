import React from "react";
import Input from "antd/lib/input";

export default function TextAreaField({ ...extraProps }) {
  return <Input.TextArea {...extraProps} />;
}
