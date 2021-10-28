import { FunctionComponent } from "react";
import { Button } from "antd";
import styles from "./index.module.less";
interface CompDoctorSignProps {
  onSubmit: () => void;
}

const CompDoctorSign: FunctionComponent<CompDoctorSignProps> = ({
  onSubmit,
}) => {
  return (
    <>
      <div className={styles.sign}>
        <div>
          医师签名
          <img
            className={styles.signImg}
            src="https://sit-scan-private.weicha88.com/diag/2021051812040260a33cb2e5c3d.png?security-token=CAIS8AF1q6Ft5B2yfSjIr5fBJPbNv%2BsX1KChd0%2FyllcDa7pNtrDxrjz2IHlOf3BqBeEfsPw0lGlY5%2F8ZlqNpTJtIclfWWtN7tm3jKtgFJNivgde8yJBZor%2FHcDHhJnyW9cvWZPqDP7G5U%2FyxalfCuzZuyL%2FhD1uLVECkNpv74vwOLK5gPG%2BCYCFBGc1dKyZ7tcYeLgGxD%2Fu2NQPwiWeiZygB%2BCgE0D0uuPzvnZHBu0CO0garl9V4%2FdqhfsKWCOB3J4p6XtuP2%2Bh7S7HMyiY46WIRrf0t1fYYqG6Z5orNWgkAuk6cXPHI6ZhjIRFp9Tqd8DyFRpMagAGO37%2Bhuzo%2FtCDaZ381NvWLMy2vIzqgztOx7L%2BcOUewujqN7BfZP2KfDQIfj8vMBb9DpUSl1fFRsqN5PmdljIVwP3BrxRlatlkZPOEY9O6iXXhG9S7%2BxHYxZ8j5MYHiyHlFtTQ8jdb5yxpMo7T5GOYswZqUbkVhfwXpKlHz4biGOA%3D%3D&OSSAccessKeyId=STS.NTtoLyR46cbJuiCrWVg5aYuZL&Expires=1635415042&Signature=R6B1EznM253JHr9tiVBlYfbiVTQ%3D"
            alt=""
          />
        </div>
        <Button>确认签字</Button>
      </div>
      <Button size="large" block type="primary" onClick={onSubmit}>
        预览报告
      </Button>
      <div className={styles.tips}>本报告仅供临床参考，不做证明材料</div>
    </>
  );
};

export default CompDoctorSign;
