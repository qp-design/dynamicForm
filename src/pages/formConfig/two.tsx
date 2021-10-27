import { FieldType, NamePath } from "libs/types/formField";
interface innerConfigType {
  namePath: NamePath;
  [v: string]: unknown;
}
const impConfig = (params: Array<innerConfigType>): Array<FieldType> =>
  params.map(({ namePath }: { namePath: NamePath }) => ({
    style: {
      display: "inline-block",
      width: "45%",
    },
    name: namePath,
    type: "text",
    // rules: [{ required: true, message: "请输入名称3" }],
    extraProps: {
      prefix: "厚",
      suffix: "mm",
      placeholder: "请输入名称3",
    },
  }));
// const InnerForm: Array<FieldType> = [
//   {
//     style: {
//       display: "inline-block",
//       width: 200,
//     },
//     name: ["user", 2, "users", "name"],
//     type: "text",
//     // rules: [{ required: true, message: "请输入名称3" }],
//     extraProps: {
//       prefix: "厚",
//       suffix: "mm",
//       placeholder: "请输入名称3",
//     },
//   },
//   {
//     style: {
//       display: "inline-block",
//       width: 200,
//     },
//     name: ["user", 2, "users", "age"],
//     type: "text",
//     // rules: [{ required: true, message: "请输入名称3" }],
//     extraProps: {
//       prefix: "厚",
//       suffix: "mm",
//       placeholder: "请输入名称3",
//       style: {
//         // width: 'calc(30% - 8px)',
//       },
//     },
//   },
// ];

const fieldsForm: Array<FieldType> = [
  {
    label: "结节大小",
    name: "user",
    rules: [{ required: true, message: "xxxxxxxx" }],
    type: "complex",
    extraProps: {
      innerForm: impConfig([
        {
          namePath: ["user", 0, "users", "name"],
        },
        {
          namePath: ["user", 0, "users", "age"],
        },
        {
          namePath: ["user", 1, "users", "name"],
        },
        {
          namePath: ["user", 1, "users", "age"],
        },
      ]),
    },
  },
  // {
  //   noStyle: true,
  //   name: "",
  //   type: "complex",
  //   extraProps: {
  //     innerForm: impConfig([
  //       {
  //         namePath: ["user", 1, "users", "name"],
  //       },
  //       {
  //         namePath: ["user", 1, "users", "age"],
  //       },
  //     ]),
  //     label: "结节大小",
  //     labelCol: { span: 8 },
  //     required: true,
  //   },
  // },
  // {
  //   noStyle: true,
  //   name: "",
  //   type: "complex",
  //   extraProps: {
  //     innerForm: InnerForm,
  //     label: "结节大小",
  //     labelCol: { span: 8 },
  //     required: true,
  //   },
  // },
];

const config = {
  saveText: "下一步",
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  fields: fieldsForm,
};

export default config;
