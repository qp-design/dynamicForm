import { captcha } from "libs/api/user-api";
import React, { useEffect, useState } from "react";
import { useSafeImplement } from "libs/hooks";

const Capture = (): JSX.Element => {
  const [url, setUrl] = useState<string>("");
  const safeSetUrl = useSafeImplement(setUrl);
  useEffect(() => {
    getImagesUrl();
  }, []);

  const getImagesUrl = () => {
    captcha()
      .then((res: Response) => {
        const url = window.URL.createObjectURL(res);
        safeSetUrl(url);
      })
      .catch(() => {});
  };
  return (
    <img onClick={getImagesUrl} src={url} alt={url} height={38} width={150} />
  );
};
export default Capture;
