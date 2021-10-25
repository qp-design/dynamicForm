type formType =
  | "text"
  | "textarea"
  | "email"
  | "password"
  | "number"
  | "checkbox"
  | "file"
  | "select"
  | "checkboxGroup"
  | "radioGroup"
  | "complex";

type callResolver = (msg?: string) => void;
export type submitType<T = any> = [T, callResolver, callResolver];

type NamePath = string | number | (string | number)[];

export interface FieldType {
  name: string | number | (string | number)[];
  noStyle?: boolean;
  colon?: boolean;
  type: formType;
  prefixIcon?: any;
  suffixIcon?: any;
  label?: string;
  shouldUpdate?: boolean;
  calIsDisabled?: (f: (name: NamePath) => any) => boolean;
  calIsVisible?: (f: (name: NamePath) => any) => boolean;
  rules?: Array<
    { required?: boolean; message?: string; pattern?: RegExp } | any
  >;
  initialValue?: string | number | boolean | Array<string | number>;
  readOnly?: boolean;
  minLength?: number;
  placeholder?: string;
  loading?: boolean;
  extraProps?: { [k: string]: unknown };
  style?: { [k: string]: unknown };
}
