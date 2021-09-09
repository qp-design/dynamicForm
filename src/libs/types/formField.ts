type formType =
  | "text"
  | "textarea"
  | "email"
  | "password"
  | "number"
  | "checkbox"
  | "file"
  | "select"
  | "slot";

type callResolver = (msg?: string) => void;
export type submitType<T = any> = [T, callResolver, callResolver];

export interface FieldType {
  name: string;
  type: formType;
  label?: string;
  hidden?: boolean;
  rules?: Array<{ required?: boolean; message?: string; pattern?: RegExp }>;
  initialValue?: string | number | boolean | Array<string | number>;
  mode?: boolean;
  readOnly?: boolean;
  minLength?: number;
  placeholder?: string;
  loading?: boolean;
  extraProps?: { [k: string]: unknown };
  style?: { [k: string]: unknown };
}
