import React, { useState, useEffect } from "react";
import WidgetGrid from "Common/components/WidgetGrid";
import { UserResponse } from "Data/types";
import { WidgetCardObj } from "Common/types";

interface Props {
  userData?: UserResponse;
}
const DashBoard: React.FC<Props> = ({ userData = null }) => {
  const [widgetArray, setWidgetCardArray] = useState<Array<WidgetCardObj> | null>(null);
  console.log(widgetArray, setWidgetCardArray);

  useEffect(() => {
    if (userData) {
      let cardArray: Array<WidgetCardObj> = [];
      console.log(cardArray);
      setWidgetCardArray(null);
    }

    // change from default to received data from Profile
  }, [userData]);

  // Default if no user-data is given --> can't be null / demanded by widget Array?
  // --> need to define default on my own here.

  return <WidgetGrid />;
};

export default DashBoard;
