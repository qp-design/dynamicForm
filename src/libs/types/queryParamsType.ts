export type paramsType = { [v in string]: unknown } | null;

interface returnType extends Promise<Response> {
  cancel?: () => void;
}

export type apiType = (
  input: { [v: string]: unknown } | null,
  init?: AbortSignal
) => returnType;

export type queryParamsType = [paramsType, string, apiType];
