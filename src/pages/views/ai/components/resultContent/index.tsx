import { Descriptions, Row, Col } from "antd";
import { contentVideo } from "pages/views/ai/config/data";
import { snapshotsType } from "libs/types/video";
import { Fragment, useEffect, useState } from "react";
import pick from "lodash/pick";
import { loginFormParam } from "../../../../noAuthor/login/config";

export default function ResultContentJsx({
  defaultVideo,
  aiVideo,
}: {
  defaultVideo: string;
  aiVideo: Array<any>;
}) {
  const [desVideo, setData] = useState<Array<any> | null>(null);

  useEffect(() => {
    try {
      const data = JSON.parse(defaultVideo);
      const d = Object.values(data.region);
      console.log(d);
      setData(d);
    } catch (e) {}
  }, [defaultVideo]);

  return (
    <Row justify="space-between">
      <Col span={12}>
        <>
          <h4>AI 诊断</h4>
          {aiVideo ? <DesInfo desVideo={desVideo} /> : null}
        </>
        {/*<Des aiVideo={aiVideo} title={'AI 诊断'} />*/}
      </Col>
      <Col span={12}>
        <>
          <h4>诊断结果</h4>
          {desVideo ? <DesInfo desVideo={desVideo} /> : null}
        </>
      </Col>
    </Row>
  );
}
il;
dev;
const DesInfo = ({ desVideo }: { desVideo: Array<any> }) => {
  return (
    <>
      {desVideo.map((item) => {
        console.log(44, item.values);
        const values = pick(item.values, [
          "exist_tuber",
          "tuber_num",
          "tuber_size_x",
          "tuber_size_y",
        ]);
        return (
          <>
            <h5>{item.tab_type}</h5>
            <DesInner values={values} />
          </>
        );
      })}
    </>
  );
};

const DesInner = ({ values }: { values: snapshotsType }) => {
  console.log(59, values);
  const computed = (param = "") => {
    // @ts-ignore
    return contentVideo[param].name;
  };

  const computedValue = (param = "", item: {}) => {
    // @ts-ignore
    return item.citem;
  };
  return (
    <>
      12312313
      {/*Object.keys(values).map((citem) => (*/}
      {/*  <dl>*/}
      {/*    <dt>{computed(citem)}</dt>*/}
      {/*    <dd>{ computedValue(citem, values) }</dd>*/}
      {/*  </dl>*/}
      {/*))*/}
    </>
  );
};

function Des({ aiVideo, title }: { aiVideo: Array<any>; title: string }) {
  const computed = (param = "") => {
    // @ts-ignore
    return contentVideo[param].name;
  };

  const computedValue = (param = "", item: {}) => {
    // @ts-ignore
    return contentVideo[param].value(item[param]);
  };

  return (
    <Descriptions title={title} size={"small"} column={1}>
      {aiVideo?.map((item: snapshotsType, index) => (
        <Fragment key={index}>
          {Object.keys(item).map((citem) => (
            <Descriptions.Item key={citem} label={computed(citem)}>
              {computedValue(citem, item)}
            </Descriptions.Item>
          ))}
        </Fragment>
      ))}
    </Descriptions>
  );
}
