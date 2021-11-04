import { FieldType } from "libs/types/formField";
import {
  NumberField,
  TextAreaField,
  InputField,
  CheckboxField,
  CheckboxGroupField,
  RadioGroupField,
  ComplexFields,
  SelectFields,
} from "components/dynamic-form/fields";
import { Form } from "antd";
import get from "lodash/get";

const FieldTypeComponent = {
  number: NumberField,
  textarea: TextAreaField,
  text: InputField,
  checkbox: CheckboxField,
  checkboxGroup: CheckboxGroupField,
  radioGroup: RadioGroupField,
  complex: ComplexFields,
  select: SelectFields,
};

const dynamicFormFields = (fields: Array<FieldType>) => {
  return fields.map(
    (
      {
        name,
        type,
        extraProps,
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

      const FieldComponent = get(FieldTypeComponent, type, InputField);
      return (
        <Form.Item shouldUpdate key={(name || idx).toString()} noStyle>
          {({ getFieldValue }) =>
            calIsVisible(getFieldValue) ? (
              <>
                {prefixIcon?.(getFieldValue)}
                <FormItem {...formItemProps}>
                  <FieldComponent
                    {...extraProps}
                    disabled={calIsDisabled(getFieldValue)}
                  />
                </FormItem>
                {suffixIcon?.(getFieldValue)}
              </>
            ) : null
          }
        </Form.Item>
      );
    }
  );
};

export default dynamicFormFields;
