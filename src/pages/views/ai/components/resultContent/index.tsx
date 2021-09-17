import DesAiInfo from "./desAiInfo";

export default function ResultContentJsx({
  defaultVideo,
  aiVideo,
}: {
  defaultVideo: Array<any>;
  aiVideo: Array<any>;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {aiVideo ? (
        <div style={{ flex: 1 }}>
          <h3>AI 诊断</h3>
          <DesAiInfo aiVideo={aiVideo} />
        </div>
      ) : null}
      {defaultVideo ? (
        <div style={{ flex: 1 }}>
          <h3>诊断结果</h3>
          <DesAiInfo aiVideo={defaultVideo} />
        </div>
      ) : null}
    </div>
  );
}
