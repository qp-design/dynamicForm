import { FieldType } from "libs/types/formField";
import { FormInstance, Form } from "antd";
import dynamicFormFields from "../../components/form/dynamicFormFields";

const setFieldsImp = (id: string, { setFieldsValue }: FormInstance) => ({
  validator(_: unknown, value: Boolean) {
    setFieldsValue({ [id]: value });
    return Promise.resolve();
  },
});

const InnerForm: Array<FieldType> = [
  {
    style: {
      display: "inline-block",
      width: 200,
    },
    name: "tet12",
    type: "text",
    // prefixIcon: ' ✖ ️',
    rules: [{ required: true, message: "请输入名称3" }],
    extraProps: {
      prefix: "厚",
      suffix: "mm",
      placeholder: "请输入名称3",
      style: {
        // width: 'calc(30% - 8px)',
      },
    },
  },
  {
    style: {
      display: "inline-block",
      width: 200,
    },
    name: "tet",
    type: "text",
    prefixIcon: " ✖ ️",
    rules: [{ required: true, message: "请输入名称3" }],
    extraProps: {
      prefix: "厚",
      suffix: "mm",
      placeholder: "请输入名称3",
      style: {
        // width: 'calc(30% - 8px)',
      },
    },
  },
];
const fieldsForm: Array<FieldType> = [
  {
    colon: false,
    name: "isVisible",
    type: "checkbox",
    label: " ",
    rules: [setFieldsImp.bind(null, "test")],
    extraProps: {
      label: "未显示",
      placeholder: "请输入名称1",
      config: {
        true: {
          visible: ["isVisible", "test", "default"],
        },
      },
    },
  },
  {
    name: "one",
    type: "text",
    label: "名称1",
    rules: [{ required: true, message: "请输入名称1" }],
    extraProps: {
      placeholder: "请输入名称1",
    },
  },
  {
    name: "two",
    type: "text",
    label: "名称2",
    rules: [{ required: true, message: "请输入名称2" }],
    extraProps: {
      placeholder: "请输入名称2",
    },
  },
  {
    noStyle: true,
    name: "te",
    type: "slot",
    extraProps: {
      diyRender: (form: FormInstance) => (
        <Form.Item label="结节大小" labelCol={{ span: 8 }} required>
          {dynamicFormFields(InnerForm, form)}
        </Form.Item>
      ),
      prefix: "大着长",
      suffix: "mm",
      placeholder: "请输入名称3",
    },
  },
  {
    style: {
      marginTop: 20,
    },
    name: "three",
    type: "text",
    label: "心率(HR)",
    rules: [{ required: true, message: "请输入名称3" }],
    extraProps: {
      suffix: "(参考范围： 60 - 100)",
      // <Input prefix="￥" suffix="RMB" />
      placeholder: "请输入名称3",
    },
  },
  {
    colon: false,
    name: "test",
    type: "checkbox",
    label: " ",
    rules: [setFieldsImp.bind(null, "isVisible")],
    extraProps: {
      label: "正常",
      placeholder: "请输入名称1",
      config: {
        true: {
          visible: ["isVisible", "test", "default"],
        },
      },
    },
  },
  {
    colon: false,
    name: "testOne",
    type: "checkbox",
    label: " ",
    extraProps: {
      label: "选中输入名称4",
      placeholder: "请输入名称1",
    },
  },
  {
    name: "default",
    type: "text",
    label: "名称4",
    rules: [{ required: true, message: "请输入名称4" }],
    calIsVisible: (getFieldValue) => getFieldValue("testOne"),
    extraProps: {
      placeholder: "请输入名称3",
    },
  },
  {
    noStyle: true,
    name: ["twoOne", "name"],
    type: "checkbox",
    label: " ",
    extraProps: {
      label: "颈动脉",
      style: {
        paddingLeft: "33%",
      },
    },
  },
  {
    noStyle: true,
    name: ["twoOne", "jack"],
    type: "text",
    label: "",
    rules: [{ required: true, message: "请输入名称4" }],
    extraProps: {
      placeholder: "请输入名称3",
      style: {
        width: "calc(50% - 8px)",
        display: "inline-block",
      },
    },
  },
];

export default {
  saveText: "下一步",
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  fields: fieldsForm,
};
