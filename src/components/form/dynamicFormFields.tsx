import React from "react";
import { FieldType } from "libs/types/formField";
import { NumberField, TextAreaField, InputField, CheckboxField, SlotField } from "components/dynamic-form/fields";
import { Form } from "antd";
import get from "lodash/get";

const FieldTypeComponent = {
  number: NumberField,
  textarea: TextAreaField,
  text: InputField,
  checkbox: CheckboxField,
  slot: SlotField,
};

const dynamicFormFields = (fields: Array<FieldType>) => {
  return fields.map(
    ({ name, label, type, readOnly, rules, extraProps, ...rest }: FieldType) => {
      const FormItem = Form.Item;

      const formItemProps: { [k: string]: unknown } = {
        label: type === "checkbox" ? "" : label,
        name,
        type,
        readOnly,
        rules,
        ...rest
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
