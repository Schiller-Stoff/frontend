import React, { useState, useEffect } from "react";
import { messages } from "./messages";
import WidgetGrid from "Common/components/WidgetGrid";
import { UserData } from "Data/types";
import { WidgetCardObj } from "Common/types";
import { FormattedMessage } from "react-intl";

interface Props {
  userData?: UserData;
}

//TODO: Default from DashBoard should of Course not be null!
const DashBoard: React.FC<Props> = ({ userData = null }) => {
  const [widgetArray, setWidgetCardArray] = useState<Array<WidgetCardObj> | null>(null);

  useEffect(() => {
    if (userData) {
      let cardArray: Array<WidgetCardObj> = []; //not a deep copy?
      let card: WidgetCardObj = {
        key: 0,
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
      };
      cardArray.push(card);
      setWidgetCardArray(cardArray);
    }
  }, [userData]);

  //TODO:
  // Default if no user-data is given --> can't be null / demanded by widget Array?
  // --> need to define default on my own here

  return widgetArray ? <WidgetGrid cardArray={widgetArray} /> : null;
};

export default DashBoard;
