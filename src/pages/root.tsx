import { FC, Fragment } from "react";
import Login from "pages/noAuthor/login";
import { useAuth } from "libs/context/authorityProvider";
import Author from "pages/author";
import { ErrorBoundary } from "components/error/error-boundary";
import { fullPageErrorFallback } from "components/error/fullPageErrorFallBack";
import DialogJsx from "components/dialogJsx";

const App: FC = () => {
  const { user } = useAuth();
  return (
    <ErrorBoundary fallbackRender={fullPageErrorFallback}>
      <DialogJsx />
      <Fragment>{user ? <Author /> : <Login />}</Fragment>
    </ErrorBoundary>
  );
};

export default App;
