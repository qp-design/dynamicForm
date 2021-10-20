import React from "react";
import { FieldType } from "libs/types/formField";
import {
  NumberField,
  TextAreaField,
  InputField,
  CheckboxField,
  CheckboxGroupField,
  SlotField,
} from "components/dynamic-form/fields";
import { Form } from "antd";
import get from "lodash/get";
import { FormInstance } from "antd/lib/form/hooks/useForm";

const FieldTypeComponent = {
  number: NumberField,
  textarea: TextAreaField,
  text: InputField,
  checkbox: CheckboxField,
  checkboxGroup: CheckboxGroupField,
  slot: SlotField,
};

const dynamicFormFields = (fields: Array<FieldType>, form: FormInstance) => {
  return fields.map(
    ({
      name,
      type,
      calIsVisible = () => true,
      extraProps,
      prefixIcon,
      suffixIcon,
      ...rest
    }: FieldType) => {
      const FormItem = Form.Item;
      const formItemProps: { [k: string]: unknown } = {
        name,
        type,
        valuePropName: type === "checkbox" ? "checked" : "value",
        ...rest,
      };

      const FieldComponent = get(FieldTypeComponent, type, InputField);
      return (
        <Form.Item shouldUpdate key={name.toString()} noStyle>
          {({ getFieldValue }) =>
            calIsVisible(getFieldValue) ? (
              <>
                {prefixIcon}
                <FormItem key={name.toString()} {...formItemProps}>
                  <FieldComponent {...extraProps} form={form} />
                </FormItem>
                {suffixIcon}
              </>
            ) : null
          }
        </Form.Item>
      );
    }
  );
};

export default dynamicFormFields;
