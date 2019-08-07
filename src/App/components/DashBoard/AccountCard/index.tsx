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
      <i className="fas fa-user-circle" style={{ fontSize: "4em", color: "lightgrey" }}></i>{" "}
      {/*TODO: Remove inline style */}
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
    </div>
  );
};

export default AccountCard;
