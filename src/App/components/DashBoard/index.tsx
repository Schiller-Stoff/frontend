import React, { useState, useEffect } from "react";
import WidgetGrid from "Common/components/WidgetGrid";
import { UserResponse } from "Data/types";
interface Props {
  userData?: UserResponse;
}
const DashBoard: React.FC<Props> = ({ userData = null }) => {
  const [widgetArray, setWidgetCardArray] = useState(null);

  useEffect(() => {
    console.log("Dummy to to remember");
    console.log(widgetArray, setWidgetCardArray);
    // change from default to received data from Profile
  }, [userData, widgetArray]);

  // Default if no user-data is given --> can't be null / demanded by widget Array?
  // --> need to define default on my own here.

  return <WidgetGrid />;
};

export default DashBoard;
