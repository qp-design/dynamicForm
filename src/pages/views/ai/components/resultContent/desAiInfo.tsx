import { snapshotsType } from "libs/types/video";
import { contentVideo } from "../../config/data";
export default function DesAiInfo({
  aiVideo,
}: {
  aiVideo: Array<snapshotsType>;
}) {
  return (
    <>
      {aiVideo.map((item, idx) => (
        <DesAiInner key={idx} item={item} />
      ))}
    </>
  );
}

const DesAiInner = ({ item }: { item: snapshotsType }) => {
  const listData = Object.keys(item) as Array<keyof snapshotsType>;
  return (
    <div style={{ marginBottom: 15 }}>
      {listData.map((citem: keyof snapshotsType) => {
        return (
          <dl
            key={citem}
            style={{ display: "flex", marginBottom: 0, color: "#444" }}
          >
            <dt>{contentVideo[citem].name} :</dt>
            <dd style={{ textIndent: 10 }}>
              {contentVideo[citem].value(item[citem])}
            </dd>
          </dl>
        );
      })}
    </div>
  );
};
