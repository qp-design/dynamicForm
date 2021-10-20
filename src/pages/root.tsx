import { FC } from "react";
import { ErrorBoundary } from "components/error/error-boundary";
import { fullPageErrorFallback } from "components/error/fullPageErrorFallBack";
import OneJsx from "./position/one";

const App: FC = () => {
  return (
    <ErrorBoundary fallbackRender={fullPageErrorFallback}>
      <div style={{ width: 1000 }}>
        <OneJsx />
      </div>
    </ErrorBoundary>
  );
};

export default App;
