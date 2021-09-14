import { resetPasswordForm } from "pages/noAuthor/login/config";
import DynamicForm from "components/form";
import { submitType } from "libs/types/formField";
import { resetForm } from "libs/types/login";
import { resetPassword } from "libs/api/user-api";

const ResetPassWordJsx = () => {
  const onSubmit = async (...args: submitType<resetForm>) => {
    const [value, suc, error] = args;
    try {
      const data = await resetPassword({ ...value });
      console.log(data);
    } catch (e) {}
    suc();
  };

  return (
    <DynamicForm
      saveText={"立即修改"}
      fields={resetPasswordForm}
      onSubmit={onSubmit}
    />
  );
};
export default ResetPassWordJsx;
