// import dynamicFormFields from "components/form/dynamicFormFields";
// import { FieldType } from "libs/types/formField";

// export default function ComplexFields({
//   innerForm,
// }: {
//   innerForm: Array<FieldType>;
// }) {
//   return <>{dynamicFormFields(innerForm)}</>;
// }

import { Form } from "antd";
import dynamicFormFields from "components/form/dynamicFormFields";
import { FieldType } from "libs/types/formField";

export default function ComplexFields({
  innerForm,
  ...extraProps
}: {
  innerForm: Array<FieldType>;
}) {
  return <Form.Item {...extraProps}>{dynamicFormFields(innerForm)}</Form.Item>;
}
