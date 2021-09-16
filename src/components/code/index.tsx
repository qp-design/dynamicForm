import React, { useEffect, useState } from "react";
import { mobile as mobileIo } from "libs/api/user-api";
import { Button, FormInstance } from "antd";
import { useMountedRef } from "libs/hooks";

const CodeJsx = ({ form }: { form: FormInstance }) => {
  const [dataTime, setDataTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const isMounted = useMountedRef();
  useEffect(() => {
    const time = setTimeout(function next() {
      if (dataTime === 0) {
        clearTimeout(time);
        return;
      }
      if (isMounted.current) {
        setDataTime((dataTime) => dataTime - 1);
      }
    }, 1000);

    return () => clearTimeout(time);
  }, [dataTime, isMounted]);

  const fetchCode = () => {
    setLoading(true);
    const { getFieldsValue } = form;
    const { mobile } = getFieldsValue();
    mobileIo({ mobile })
      .then(() => {
        setDataTime(1 * 60);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Button
      loading={loading}
      size={"small"}
      type={"link"}
      disabled={dataTime > 0}
      style={{ cursor: "pointer" }}
      onClick={fetchCode}
    >
      {dataTime === 0 ? "获取验证码" : `倒计时${dataTime}秒`}
    </Button>
  );
};

export default CodeJsx;
