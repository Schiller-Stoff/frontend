import logo from "app/assets/images/logo.png";
import Navbar from "core/components/Navbar";
import { history } from "core/history";
import { Url } from "core/Url";
import React from "react";
import { Route, Router } from "react-router";
import Home from "../Home";
import styles from "./styles.module.scss";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Navbar logo={logo} title="nampi" />
      <div className={styles.content}>
        <Route exact path={Url.Home} component={Home} />
      </div>
    </Router>
  );
};

export default App;
