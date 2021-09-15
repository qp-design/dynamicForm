import AuthVideo from "./authVideo";
import { useEffect, useState } from "react";
import { aiProjectType, videoAuthType, videoType } from "libs/types/video";
import { vidPlayAuth } from "libs/api/video-api";

export default function MainVideo({
  selectItem,
}: {
  selectItem: aiProjectType;
}) {
  const [video, setVideo] = useState<videoAuthType | null>(null);
  const [type, setType] = useState<videoType>("source_url_e");

  useEffect(() => {
    setType("source_url_e");
  }, [selectItem]);

  useEffect(
    function () {
      (async () => {
        const data = await vidPlayAuth({
          id: selectItem[type || ""],
        });
        setVideo(data);
      })();
    },
    [type, selectItem]
  );

  return (
    <AuthVideo video={video}>
      <div className="tips">
        <span
          className={type === "source_url_e" ? "focus" : ""}
          onClick={() => setType("source_url_e")}
        >
          左侧
        </span>
        <span
          className={type === "source_ai_url_e" ? "focus" : ""}
          onClick={() => setType("source_ai_url_e")}
        >
          AI
        </span>
      </div>
    </AuthVideo>
  );
}
