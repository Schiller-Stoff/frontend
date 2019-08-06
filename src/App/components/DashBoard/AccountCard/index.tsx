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
      <hr />
      <h3>My Account</h3>
      <p>
        <FormattedMessage {...messages.email} />: {userData.email}
      </p>
      <p>
        <FormattedMessage {...messages.name} />: {userData.username}
      </p>
    </div>
  ) : (
    <div>
      <br></br>
      <br></br>
      <p> Add more details </p>
    </div>
  );
};

export default AccountCard;
