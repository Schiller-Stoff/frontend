import logo from "App/assets/images/logo.png";
import Navbar from "Common/components/Navbar";
import { history } from "Common/history";
import { Url } from "Common/Url";
import React from "react";
import { Route, Router, Switch } from "react-router";
import Home from "../Home";
import styles from "./styles.module.scss";
import NoMatch from "../NoMatch";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Navbar logo={logo} title="nampi" />
      <div className={styles.content}>
        <Switch>
          <Route exact path={Url.Home} component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
