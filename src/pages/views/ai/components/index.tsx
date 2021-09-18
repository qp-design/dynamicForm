import ResultContentJsx from "./resultContent";
import ResultVideoJsx from "./result";
import { useVideoQuery } from "libs/hooks";
import { videoQuery } from "libs/api/video-api";
import { useParamsContext } from "libs/context/paramsProvider";
import { Spin } from "antd";

export default function ResultJsx() {
  const { params } = useParamsContext();

  const { isLoading, data } = useVideoQuery(params, "video", videoQuery);

  return (
    <Spin spinning={isLoading}>
      <div className="site-layout-space">
        <div className="site-layout-content">
          <ResultVideoJsx urls={data?.urls} urlsChoice={data?.urls_choice} />
        </div>
        <div className="site-layout-content">
          <ResultContentJsx
            defaultVideo={data?.snapshots}
            aiVideo={data?.snapshots_ai}
          />
        </div>
      </div>
    </Spin>
  );
}
