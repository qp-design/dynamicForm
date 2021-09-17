import { Badge, Row, Col } from "antd";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { aiProjectType, aiChoiceType } from "libs/types/video";
import MainVideo from "./mainVideo";
import { dataPosition } from "pages/views/ai/config/data";
import { YoutubeOutlined } from "@ant-design/icons";

export default function ResultVideoJsx({
  urls,
  urlsChoice,
}: {
  urls: Array<aiProjectType>;
  urlsChoice: Array<aiChoiceType>;
}) {
  const [selectVideo, setVideo] = useState<aiProjectType | null>(null);

  useEffect(() => {
    setVideo(urls?.[0]);
  }, [urls]);

  const switchHandler = (item: aiProjectType) => {
    const { source_type } = item;
    if (source_type === 2) {
      setVideo(item);
    }
  };

  return (
    <Row justify="space-between" style={{ width: "100%" }}>
      <Col span={8}>
        {urlsChoice ? (
          <List title="已选影像图片" urls={urlsChoice || []} />
        ) : null}
        {urls ? (
          <List
            selectId={selectVideo?.id}
            icon={<YoutubeOutlined style={{ color: "#fff", fontSize: 24 }} />}
            title="其他影像图片"
            urls={urls || []}
            switchHandler={switchHandler}
          />
        ) : null}
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
  icon,
  selectId,
}: {
  selectId?: number;
  icon?: ReactNode;
  title?: string;
  urls: Array<aiProjectType | aiChoiceType>;
  switchHandler?: (item: any) => void;
}) => {
  const computed = useCallback((position: number, isActived: boolean) => {
    return (
      <span style={{ color: isActived ? "#fff" : "#444", fontWeight: 700 }}>
        {dataPosition.find((item) => item.code === position)?.name}
      </span>
    );
  }, []);

  return (
    <div style={{ marginBottom: 15 }}>
      <h3>{title}</h3>
      <Row justify="space-between" style={{ width: "100%" }}>
        {urls.map((item, idx) => (
          <Col span={11} key={idx}>
            <Badge.Ribbon
              text={computed(
                item.position,
                Boolean(selectId === item?.id && item?.id)
              )}
              color={selectId === item?.id && item?.id ? "blue" : "white"}
              placement="start"
            >
              <div
                style={{ position: "relative", marginBottom: 15 }}
                onClick={switchHandler?.bind(null, item)}
              >
                <div
                  style={{
                    position: "absolute",
                    margin: "-10px 0 0 -10px",
                    left: "50%",
                    top: "50%",
                  }}
                >
                  {icon}
                </div>
                <img
                  alt={item.source_url}
                  width={"100%"}
                  src={item.source_url}
                />
              </div>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </div>
  );
};
