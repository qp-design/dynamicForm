import { videoAuthType } from "libs/types/video";
import { ReactNode, useEffect, useCallback, useState } from "react";

export default function AuthVideo({
  video,
  children,
}: {
  video: videoAuthType | null;
  children: ReactNode;
}) {
  const [height, setHeight] = useState<string>("0px");
  const measuredRef = useCallback((node) => {
    console.log(node);
    if (node !== null) {
      const { y } = node.getBoundingClientRect();
      setHeight(`calc(100vh - ${y + 15}px)`);
    }
  }, []);
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
    <div style={{ position: "relative", height }} ref={measuredRef}>
      {children}
      <div
        className="prism-player"
        id="J_prismPlayer"
        style={{ height: "100%" }}
      ></div>
    </div>
  );
}
