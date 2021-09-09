import { VFC } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MenuContainer from "./views/menu";
import routes from "../routes";

const Author: VFC = () => {
  return (
      <Router>
        <Switch>
          <MenuContainer>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact
                render={(props) => <route.component {...props} />}
              />
            ))}
          </MenuContainer>
        </Switch>
      </Router>
  );
};

export default Author;
