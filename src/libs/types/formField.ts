type formType =
  | "text"
  | "textarea"
  | "number"
  | "checkbox"
  | "select"
  | "radioGroup"
  | "checkboxGroup"
  | "complex"
  | "range"
  | "date"
  | "cascader"
  | "upload";

type callResolver = (msg?: string) => void;
export type submitType<T = any> = [T, callResolver, callResolver];

export type NamePath = string | number | (string | number)[];

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
  loading?: boolean;
  extraProps?: { [k: string]: unknown };
  style?: { [k: string]: unknown };
}

export interface TransformType {
  from: string;
  to: string;
  format: (preValue: any, value: any) => any;
  isDelete?: boolean; // 原字段是否保留: true删除
}
