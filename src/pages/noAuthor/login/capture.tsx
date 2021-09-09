import { captcha } from "libs/api/user-api";
import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { useSafeImplement } from "../../../libs/hooks";

const Capture = (): JSX.Element => {
  const [url, setUrl] = useState<string>("");
  const safeSetUrl = useSafeImplement(setUrl);
  useEffect(() => {
    getImagesUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getImagesUrl = () => {
    captcha()
      .then((res: AxiosResponse<BlobPart>) => {
        const url = window.URL.createObjectURL(res.data);
        safeSetUrl(url);
      })
      .catch(() => {});
  };
  return (
    <img onClick={getImagesUrl} src={url} alt={url} height={48} width={150} />
  );
};
export default Capture;
