import React, { useState } from "react";
import { messages } from "./messages";
import WidgetGrid from "Common/components/WidgetGrid";
import { UserData } from "Data/types";
import { WidgetCardObj } from "Common/types";
import { FormattedMessage } from "react-intl";

interface Props {
  userData?: UserData;
}

const DashBoard: React.FC<Props> = ({
  userData = { email: "Could be your Email", username: "Could be your username" }
}) => {
  const WIDGET_ARRAY_DEFAULT: Array<WidgetCardObj> = [
    {
      key: 0,
      orderNumber: 0,
      frontContent: (
        <div>
          <hr />
          <h3>My Account</h3>
          <p>
            <FormattedMessage {...messages.email} />: {userData.email}
          </p>
          <p>
            <FormattedMessage {...messages.name} />: {userData.username}
          </p>
        </div>
      ),
      backContent: (
        <div>
          <br></br>
          <br></br>
          <p> Add more details </p>
        </div>
      ),
      backgrColor: "white"
    },
    {
      key: 1,
      orderNumber: 1,
      frontContent: (
        <div>
          <br></br>
          <br></br>
          <h3>Recent Activities</h3>
        </div>
      ),
      backContent: (
        <div>
          <br></br>
          <ul>
            <li>Searched for: XYZ</li>
          </ul>
        </div>
      ),
      classes: ["is-6"],
      backgrColor: "white"
    },
    {
      key: 2,
      orderNumber: 2,
      frontContent: <div></div>,
      backContent: <div></div>,
      classes: ["is-3"],
      backgrColor: "white"
    }
  ];

  const [widgetArray, setWidgetCardArray] = useState<Array<WidgetCardObj> | null>(
    WIDGET_ARRAY_DEFAULT
  );
  console.log(setWidgetCardArray);

  return widgetArray ? <WidgetGrid cardArray={widgetArray} /> : null;
};

export default DashBoard;
