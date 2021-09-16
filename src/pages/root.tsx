import { FC, Fragment } from "react";
import Login from "pages/noAuthor/login";
import { useAuth } from "libs/context/authorityProvider";
import Author from "pages/author";
import { ErrorBoundary } from "components/error/error-boundary";
import { fullPageErrorFallback } from "components/error/fullPageErrorFallBack";
import { useBackground } from "../libs/hooks";

const App: FC = () => {
  const { user } = useAuth();

  useBackground("#e1e1e1");

  return (
    <ErrorBoundary fallbackRender={fullPageErrorFallback}>
      <Fragment>{user ? <Author /> : <Login />}</Fragment>
    </ErrorBoundary>
  );
};

export default App;
