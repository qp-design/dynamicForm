import { Typography } from "antd";

const isError = (value: any): value is Error => value?.message;

export const ErrorBox = ({ error }: { error: unknown }) => {
  if (isError(error)) {
    return <Typography.Text type={"danger"}>{error?.message}</Typography.Text>;
  }
  return null;
};
export const fullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <ErrorBox error={error} />
);
