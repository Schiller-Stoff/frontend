import { useUserData } from "Data/hooks/useUserData";
import React from "react";
import { FormattedMessage } from "react-intl";
import { messages } from "./messages";
import UserInfoBox from "Common/components/UserInfoBox/index";
import { joinClasses } from "Common/utils/joinClasses";
import styles from "./styles.module.scss";

const Profile: React.FC = () => {
  const userData = useUserData();
  return (
    <div className="container">
      <h3 className="title">User Profile</h3>

      {userData ? (
        <>
          <div className="columns">
            <div className="column">
              <div className="columns">
                <div className={joinClasses("column is-4", styles.profileCard)}>
                  <UserInfoBox name={userData.username} email={userData.email}></UserInfoBox>
                </div>
                <div className={joinClasses("column", styles.profileCard)}>
                  <h4>My Recent Activities</h4>
                  <hr></hr>
                  <p>Saved Project / My recent Activities</p>
                  <p>More Details / etc.</p>
                  <ol>
                    <li>Added Collection XY</li>
                    <li>Searched for: </li>
                    <li>Changed name of</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className={joinClasses("columns", styles.profileCard)}>
            <div
              className="column is-1"
              style={{ borderRight: "1px solid lightgrey", height: "50vh" }}
            >
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
