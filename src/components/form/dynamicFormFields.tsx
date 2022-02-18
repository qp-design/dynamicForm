import React from "react";
import { FieldType } from "libs/types/formField";
import {
  NumberField,
  TextAreaField,
  InputField,
  CheckboxField,
  CheckboxGroupField,
  ComplexField,
  SelectField,
  CascaderField,
  UploadField,
  RadioGroupField,
  RangePickerField,
  DatePickerField,
} from "components/dynamic-form/fields";
import { Form, FormInstance } from "antd";
import get from "lodash/get";
import isFunction from "lodash/isFunction";

const FieldTypeComponent = {
  upload: UploadField,
  range: RangePickerField,
  date: DatePickerField,
  number: NumberField,
  textarea: TextAreaField,
  text: InputField,
  checkbox: CheckboxField,
  checkboxGroup: CheckboxGroupField,
  complex: ComplexField,
  select: SelectField,
  radioGroup: RadioGroupField,
  cascader: CascaderField,
};

const dynamicFormFields = (fields: Array<FieldType>, form: FormInstance) => {
  return fields.map(
    (
      {
        name,
        type,
        extraProps = {},
        prefixIcon,
        suffixIcon,
        calIsVisible = () => true,
        calIsDisabled = () => false,
        ...rest
      }: FieldType,
      idx: number
    ) => {
      const FormItem = Form.Item;
      const formItemProps: { [k: string]: unknown } = {
        name,
        type,
        valuePropName: type === "checkbox" ? "checked" : "value",
        ...rest,
      };

      if (type === "upload") {
        formItemProps.valuePropName = "devil-file";
        formItemProps.getValueFromEvent = (e: any) => {
          return e.fileList;
        };
      }
      const FieldComponent = get(FieldTypeComponent, type, InputField);

      return (
        <Form.Item shouldUpdate key={(name || idx).toString()} noStyle>
          {({ getFieldValue }) =>
            calIsVisible(getFieldValue) ? (
              <>
                {isFunction(prefixIcon) ? prefixIcon(form) : prefixIcon}
                <FormItem {...formItemProps}>
                  <FieldComponent
                    form={form}
                    name={name}
                    disabled={calIsDisabled(getFieldValue)}
                    {...extraProps}
                  />
                </FormItem>
                {isFunction(suffixIcon) ? suffixIcon(form) : suffixIcon}
              </>
            ) : null
          }
        </Form.Item>
      );
    }
  );
};

export default dynamicFormFields;
