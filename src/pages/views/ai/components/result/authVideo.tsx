import { videoAuthType } from "libs/types/video";
import { ReactNode, useEffect } from "react";

export default function AuthVideo({
  video,
  children,
}: {
  video: videoAuthType | null;
  children: ReactNode;
}) {
  useEffect(() => {
    // @ts-ignore
    var player = new Aliplayer(
      {
        id: "J_prismPlayer",
        width: "100%",
        autoplay: true,
        // //播放方式二：推荐点播用户使用
        vid: video?.VideoMeta.VideoId,
        playauth: video?.PlayAuth,
        cover: video?.VideoMeta.CoverURL,
        encryptType: 1, //当播放私有加密流时需要设置。
      },
      function () {
        console.log("播放器创建好了。");
      }
    );

    return () => player.dispose();
  }, [video]);

  return (
    <div style={{ position: "relative" }}>
      {children}
      <div className="prism-player" id="J_prismPlayer"></div>
    </div>
  );
}
