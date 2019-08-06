import React from "react";
import { FormattedMessage } from "react-intl";
import { messages } from "./messages";
import { UserData } from "Data/types";
//
interface Props {
  userData: UserData;
  displayFront: boolean;
}

const AccountCard: React.FC<Props> = ({ userData, displayFront }) => {
  return displayFront ? (
    <div>
      <br />
      <i className="fas fa-user-circle" style={{ fontSize: "7em", color: "lightgrey" }}></i>
      <br></br>
      <br></br>
      <p>Account Settings</p>
    </div>
  ) : (
    <div>
      <br></br>
      <p>
        <FormattedMessage {...messages.email} />: {userData.email}
      </p>
      <p>
        <FormattedMessage {...messages.name} />: {userData.username}
      </p>
      <hr></hr>
      <p> Click to add more details </p>
    </div>
  );
};

export default AccountCard;
