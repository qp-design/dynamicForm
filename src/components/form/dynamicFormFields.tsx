import React from "react";
import { FieldType } from "libs/types/formField";
import { NumberField, TextAreaField, InputField } from "../dynamic-form/fields";
import { Form } from "antd";
import get from "lodash/get";

const FieldTypeComponent = {
  number: NumberField,
  textarea: TextAreaField,
  text: InputField,
};

const dynamicFormFields = (fields: Array<FieldType>) => {
  return fields.map(
    ({ name, label, type, readOnly, rules, extraProps }: FieldType) => {
      const FormItem = Form.Item;

      const formItemProps: { [k: string]: unknown } = {
        label: type === "checkbox" ? "" : label,
        name,
        type,
        readOnly,
        rules,
      };

      const FieldComponent: React.FC = get(
        FieldTypeComponent,
        type,
        InputField
      );

      return (
        <FormItem key={name} {...formItemProps}>
          <FieldComponent {...extraProps} />
        </FormItem>
      );
    }
  );
};

export default dynamicFormFields;
