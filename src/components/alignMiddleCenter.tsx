import { ReactNode } from "react";
import { Row, Col } from "antd";

interface Props {
  colNum: number;
  children?: ReactNode;
}

const AlignMiddleCenter = ({ colNum, children }: Props) => {
  return (
    <Row justify="space-around" align="middle">
      <Col span={colNum}>{children}</Col>
    </Row>
  );
};

export default AlignMiddleCenter;
