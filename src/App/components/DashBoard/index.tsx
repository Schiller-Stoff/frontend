import React, { useState } from "react";
import WidgetGrid from "Common/components/WidgetGrid";
import { UserData } from "Data/types";
import { WidgetCardObj } from "Common/types";
import AccountCard from "./AccountCard";

interface Props {
  userData?: UserData;
}

const DashBoard: React.FC<Props> = ({
  userData = { email: "Could be your Email", username: "Could be your username" }
}) => {
  const WIDGET_ARRAY_DEFAULT: Array<WidgetCardObj> = [
    {
      key: 0,
      frontContent: <AccountCard userData={userData} displayFront={true}></AccountCard>,
      backContent: <AccountCard userData={userData} displayFront={false}></AccountCard>,
      backgrColor: "white"
    },
    {
      key: 1,
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
