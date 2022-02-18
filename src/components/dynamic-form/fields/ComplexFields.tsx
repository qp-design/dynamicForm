import dynamicFormFields from "components/form/dynamicFormFields";
import { FieldType } from "libs/types/formField";
import { FormInstance } from "antd";

export default function ComplexFields({
  innerForm,
  form,
}: {
  form: FormInstance;
  innerForm: Array<FieldType>;
}) {
  return <>{dynamicFormFields(innerForm, form)}</>;
}
