import Upload from "antd/lib/upload";
import Button from "antd/lib/button";
import UploadOutlined from "@ant-design/icons/UploadOutlined";
import { FormInstance } from "antd";
import { NamePath } from "libs/types/formField";

export default function UploadField({
  name,
  form,
  maxLength = 1,
  text,
  disabled,
  ...extraProps
}: {
  name: NamePath;
  maxLength?: number;
  form: FormInstance;
  text: string;
  disabled: boolean;
}) {
  const isDisabled =
    (form.getFieldValue(name) || []).length >= maxLength || disabled;

  return (
    <Upload {...extraProps} beforeUpload={() => false}>
      <Button disabled={isDisabled} icon={<UploadOutlined />}>
        {text}
      </Button>
    </Upload>
  );
}
