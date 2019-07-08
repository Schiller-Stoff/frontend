import { useUserData } from "Data/hooks/useUserData";
import React from "react";
import { FormattedMessage } from "react-intl";
import { messages } from "./messages";
import UserInfoBox from "Common/components/UserInfoBox/index";

const Profile: React.FC = () => {
  const userData = useUserData();
  return (
    <div className="container">
      <h1 className="title">User Profile</h1>
      <div className="columns">
        <div className="column">
          <UserInfoBox></UserInfoBox>
        </div>
      </div>
      <br></br>
      <div className="columns" style={{ border: "1px solid lightgrey", borderRadius: "10px" }}>
        <div className="column is-1" style={{ borderRight: "1px solid lightgrey", height: "50vh" }}>
          User Profile Navigation / Icons etc.
        </div>
        <div className="column is-9" style={{ height: "50vh" }}>
          User Information / Control -- Cards?
        </div>
        <div className="column" style={{ borderLeft: "1px solid lightgreen" }}>
          Input / Explore / Display
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="columns" style={{ border: "1px solid lightgreen" }}>
        <div className="column" style={{ border: "1px solid lightgreen" }}>
          Input / Explore / Display
        </div>
      </div>
      {userData ? (
        <>
          <div>
            <FormattedMessage {...messages.name} />: {userData.username}
          </div>
          <div>
            <FormattedMessage {...messages.email} />: {userData.email}
          </div>
        </>
      ) : (
        "fake-spinner"
      )}
    </div>
  );
};

export default Profile;
