import { FormInstance } from "antd";
import { ReactNode } from "react";

type diyParms = [{ [v: string]: unknown }, FormInstance];

export default function SlotField({
  form,
  diyRender,
  ...extraProps
}: {
  form: FormInstance;
  diyRender: (...[config, form]: diyParms) => ReactNode;
}) {
  return diyRender({ ...extraProps }, form);
}
