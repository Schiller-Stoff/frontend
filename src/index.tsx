import App from "app/components/App";
import { InjectIntlContext } from "core/reactIntl";
import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <IntlProvider locale="en">
    <InjectIntlContext>
      <App />
    </InjectIntlContext>
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
