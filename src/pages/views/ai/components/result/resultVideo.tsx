import { Badge, Avatar, Row, Col } from "antd";

export default function ResultVideoJsx() {
  return (
    <Row justify="space-between" style={{ width: "100%" }}>
      <Col span={8}>
        <List title="已选影像图片" />
        <List title="其他影像图片" />
      </Col>
      <Col span={16}>
        <List />
      </Col>
    </Row>
  );
}

const List = ({ title }: { title?: string }) => {
  return (
    <>
      <h4>{title}</h4>
      <ListPic />
    </>
  );
};

function ListPic() {
  return (
    <Badge.Ribbon text="Hippies" placement="start">
      <img
        width={100}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </Badge.Ribbon>
  );
}
