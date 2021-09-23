import AuthVideo from "./authVideo";
import { useEffect, useState } from "react";
import { aiProjectType, videoAuthType, videoType } from "libs/types/video";
import { vidPlayAuth } from "libs/api/video-api";
import { dataPosition } from "../../config/data";

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
        try {
          if (!selectItem.source_type) {
            setVideo(null);
            return;
          }
          const data = await vidPlayAuth({
            id: selectItem[type || ""],
          });
          setVideo(data);
        } catch (e) {
          setVideo(null);
        }
      })();
    },
    [type, selectItem]
  );

  return (
    <>
      {selectItem.source_type ? (
        <AuthVideo video={video}>
          <div className="tips">
            <span
              className={type === "source_url_e" ? "focus" : ""}
              onClick={() => setType("source_url_e")}
            >
              {
                dataPosition.find((item) => item.code === selectItem.position)
                  ?.name
              }
            </span>
            {selectItem.source_ai_url_e ? (
              <span
                className={type === "source_ai_url_e" ? "focus" : ""}
                onClick={() => setType("source_ai_url_e")}
              >
                AI
              </span>
            ) : (
              ""
            )}
          </div>
        </AuthVideo>
      ) : (
        <img
          width={"100%"}
          src={selectItem.source_url}
          alt={String(selectItem.position)}
        />
      )}
    </>
  );
}
