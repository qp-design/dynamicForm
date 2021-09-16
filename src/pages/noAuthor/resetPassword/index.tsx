import DynamicForm from "components/form";
import { FieldType, submitType } from "libs/types/formField";
import { resetForm } from "libs/types/login";
import { resetPassword } from "libs/api/user-api";
import util from "libs/utils/util";

const ResetPassWordJsx = ({ fields }: { fields: Array<FieldType> }) => {
  const onSubmit = async (...args: submitType<resetForm>) => {
    const [value, error] = args;
    try {
      await resetPassword<resetForm>(value);
      util.clearStorage("__authInfo__");
      window.location.reload();
    } catch (e) {
      error();
    }
  };

  return (
    <DynamicForm saveText={"立即修改"} fields={fields} onSubmit={onSubmit} />
  );
};
export default ResetPassWordJsx;
