import { FunctionComponent } from "react";
import { Button } from "antd";
import styles from "./index.module.less";
interface CompDoctorSignProps {
  onSubmit: () => void;
  signHandler: () => void;
  signImg?: string;
}

const CompDoctorSign: FunctionComponent<CompDoctorSignProps> = ({
  onSubmit,
  signHandler,
  signImg = "",
}) => {
  return (
    <>
      <div className={styles.sign}>
        <div>
          医师签名
          {signImg && (
            <img
              className={styles.signImg}
              src={signImg}
              style={{ border: 0 }}
              alt="签名图片"
            />
          )}
        </div>
        {!signImg && <Button onClick={signHandler}>确认签字</Button>}
      </div>
      <Button size="large" block type="primary" onClick={onSubmit}>
        预览报告
      </Button>
      <div className={styles.tips}>本报告仅供临床参考，不做证明材料</div>
    </>
  );
};

export default CompDoctorSign;
