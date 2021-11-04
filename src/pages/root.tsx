import { FC, ReactNode } from "react";
import { ErrorBoundary } from "components/error/error-boundary";
import { fullPageErrorFallback } from "components/error/fullPageErrorFallBack";
// import OneJsx from "./position/one";
import Thyroid from "./position/Thyroid";
import Carotid from "./position/Carotid";

const App: FC = () => {
  const query = new URLSearchParams(window.location.search);
  const type = query.get("type") || ""; // 1 甲状腺 2 颈动脉 3 肝脏 4 通用 5 线阵通用 6 乳腺

  const renderForm = (): ReactNode => {
    switch (type) {
      case "1":
        return <Thyroid />;
        break;
      case "2":
        return <Carotid />;
        break;
      case "3":
        return <>肝脏</>;
        break;
      case "4":
      case "5":
        return <>通用</>;
      case "6":
        return <>乳腺</>;
        break;
    }
  };

  return (
    <ErrorBoundary fallbackRender={fullPageErrorFallback}>
      <div style={{ width: "100%", padding: "0 24px" }}>{renderForm()}</div>
    </ErrorBoundary>
  );
};

export default App;
