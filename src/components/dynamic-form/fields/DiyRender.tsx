import { FormInstance } from "antd";
import { ReactNode } from "react";

export default function DiyRender({
  form,
  diyRender,
}: {
  form: FormInstance;
  diyRender: (form: FormInstance) => ReactNode;
}) {
  return diyRender(form);
}
