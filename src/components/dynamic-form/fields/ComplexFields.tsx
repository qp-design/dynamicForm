import dynamicFormFields from "components/form/dynamicFormFields";
import { FieldType } from "libs/types/formField";

export default function ComplexFields({
  innerForm,
}: {
  innerForm: Array<FieldType>;
}) {
  return <>{dynamicFormFields(innerForm)}</>;
}
