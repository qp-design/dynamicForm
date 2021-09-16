import ResultContentJsx from "./resultContent";
import ResultVideoJsx from "./result";
import { useVideoQuery } from "libs/hooks";
import { videoQuery } from "libs/api/video-api";
import { useParamsContext } from "libs/context/paramsProvider";

export default function ResultJsx() {
  const { params } = useParamsContext();

  const { data } = useVideoQuery(params, "video", videoQuery);

  return (
    <>
      <div className="site-layout-content">
        <ResultVideoJsx urls={data?.urls} urlsChoice={data?.urls_choice} />
      </div>
      <div className="site-layout-content">
        <ResultContentJsx
          defaultVideo={data?.snapshots}
          aiVideo={data?.snapshots_ai}
        />
      </div>
    </>
  );
}
