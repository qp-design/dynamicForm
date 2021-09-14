import ResultContentJsx from "./result/resultContent";
import ResultVideoJsx from "./result/resultVideo";
import { useVideoQuery } from "libs/hooks";
import { videoQuery } from "libs/api/video-api";
import { useParamsContext } from "libs/context/paramsProvider";

export default function ResultJsx() {
  const { params } = useParamsContext();

  const { isLoading, data, error } = useVideoQuery(params, "video", videoQuery);

  return (
    <>
      <div className="site-layout-content">
        <ResultVideoJsx />
      </div>
      <div className="site-layout-content">
        <ResultContentJsx />
      </div>
    </>
  );
}
