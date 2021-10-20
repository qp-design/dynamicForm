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
  | "slot";

type callResolver = (msg?: string) => void;
export type submitType<T = any> = [T, callResolver, callResolver];

export interface FieldType {
  name: string | Array<string>;
  noStyle?: boolean;
  colon?: boolean;
  type: formType;
  prefixIcon?: any;
  suffixIcon?: any;
  label?: string;
  hidden?: boolean;
  shouldUpdate?: boolean;
  calIsVisible?: (f: (name: string) => any) => boolean;
  rules?: Array<
    { required?: boolean; message?: string; pattern?: RegExp } | any
  >;
  initialValue?: string | number | boolean | Array<string | number>;
  mode?: boolean;
  readOnly?: boolean;
  minLength?: number;
  placeholder?: string;
  loading?: boolean;
  extraProps?: { [k: string]: unknown };
  style?: { [k: string]: unknown };
}
