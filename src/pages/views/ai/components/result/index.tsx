import { Badge, Row, Col } from "antd";
import { useCallback, useState } from "react";
import { aiProjectType, aiChoiceType } from "libs/types/video";
import MainVideo from "./mainVideo";
import { dataPosition } from "pages/views/ai/config/data";

export default function ResultVideoJsx({
  urls,
  urlsChoice,
}: {
  urls: Array<aiProjectType>;
  urlsChoice: Array<aiChoiceType>;
}) {
  const [selectVideo, setVideo] = useState<aiProjectType | null>(null);

  const switchHandler = (item: aiProjectType) => {
    const { source_type } = item;
    if (source_type === 2) {
      setVideo(item);
    }
  };

  return (
    <Row justify="space-between" style={{ width: "100%" }}>
      <Col span={8}>
        <List title="已选影像图片" urls={urlsChoice || []} />
        <List
          title="其他影像图片"
          urls={urls || []}
          switchHandler={switchHandler}
        />
      </Col>
      <Col span={15}>
        {selectVideo ? <MainVideo selectItem={selectVideo} /> : null}
      </Col>
    </Row>
  );
}

const List = ({
  title,
  urls,
  switchHandler,
}: {
  title?: string;
  urls: Array<aiProjectType | aiChoiceType>;
  switchHandler?: (item: any) => void;
}) => {
  const computed = useCallback((position: number) => {
    return dataPosition.find((item) => item.code === position)?.name;
  }, []);

  return (
    <>
      <h4>{title}</h4>
      <Row justify="space-between" style={{ width: "100%" }}>
        {urls.map((item, idx) => (
          <Col span={11} key={idx}>
            <Badge.Ribbon text={computed(item.position)} placement="start">
              <img
                onClick={switchHandler?.bind(null, item)}
                width={"100%"}
                src={item.source_url}
              />
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </>
  );
};
