import React from "react";
import UserInfoBox from "../UserInfoBox";
import { WidgetCardObj } from "Common/types";

export const cardObjArray: Array<WidgetCardObj> = [
  {
    key: 0,
    classes: ["is-4"],
    orderNumber: 0,
    //children: <UserInfoBox email="test" name="test" />,
    backgrColor: "white",
    frontContent: <UserInfoBox email="test" name="test" />,
    backContent: (
      <>
        <br></br>
        <h2>Register Account</h2>
        <hr></hr>
        <p>Click here to add Content</p>
      </>
    )
  },
  {
    key: 1,
    classes: ["is-8"],
    orderNumber: 1,
    backgrColor: "#26547C",
    frontContent: (
      <div style={{ textAlign: "left", paddingLeft: "2em", marginTop: "1em", color: "lightgrey" }}>
        <h4 style={{ color: "lightgrey" }}>My Recent Activities</h4>
        <hr style={{ borderColor: "#00D1B2", padding: ".125em", backgroundColor: "#00D1B2" }}></hr>
        <ul>
          <li>Searched for XYZ</li>
          <li>Collected ABC</li>
        </ul>
      </div>
    )
  },
  {
    key: 2,
    classes: ["is-2"],
    orderNumber: 2,
    backgrColor: "#EF476F",
    frontContent: (
      <div>
        <h4 style={{ color: "whitesmoke", marginTop: "1em" }}>Example Heading</h4>
      </div>
    ),
    backContent: (
      <div>
        <p style={{ color: "whitesmoke", margin: "3em" }}>Edit Heading via Click on the field.</p>
      </div>
    )
  },
  { key: 3, classes: ["is-5"], orderNumber: 3, backgrColor: "#26547C" },
  { key: 4, classes: ["is-5"], orderNumber: 4, backgrColor: "#FFD166" },
  { key: 5, classes: ["is-5"], orderNumber: 5, visible: false, backgrColor: "#FCFCFC" },
  { key: 6, classes: ["is-3"], orderNumber: 6, backgrColor: "#EF476F" }
];
