import React, { useState } from "react";
import WidgetGrid from "Common/components/WidgetGrid";
import { UserData } from "Data/types";
import { WidgetCardObj } from "Common/types";
import AccountCard from "./AccountCard";
import RecentActivitiesCard from "./RecentActivitiesCard";
import SearchCard from "./SearchCard";
import AddDataCard from "./AddDataCard";

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
      frontContent: <RecentActivitiesCard displayFront={true} />,
      backContent: <RecentActivitiesCard displayFront={false} />,
      classes: ["is-6"],
      backgrColor: "white"
    },
    {
      key: 2,
      frontContent: <SearchCard displayFront={true} />,
      backContent: <SearchCard displayFront={false} />,
      classes: ["is-6"],
      backgrColor: "white"
    },
    {
      key: 3,
      frontContent: <AddDataCard displayFront={true} />,
      backContent: <AddDataCard displayFront={false} />,
      classes: ["is-4"],
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
