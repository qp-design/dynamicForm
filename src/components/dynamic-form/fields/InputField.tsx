import Input from "antd/lib/input";
import { FormInstance } from "antd";
import { ReactNode } from "react";

export default function InputField({
  form,
  addonAfter,
  ...extraProps
}: {
  form?: FormInstance;
  addonAfter?: ((form: FormInstance | undefined) => ReactNode) | undefined;
}) {
  return <Input addonAfter={addonAfter?.(form)} {...extraProps} />;
}
