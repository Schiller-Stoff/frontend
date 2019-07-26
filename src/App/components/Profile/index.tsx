import { useUserData } from "Data/hooks/useUserData";
import React from "react";
import { FormattedMessage } from "react-intl";
import { messages } from "./messages";
import WidgetGrid from "Common/components/WidgetGrid/";
import Spinner from "Common/components/PageTransition/Spinner";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

const Profile: React.FC = () => {
  const userData = useUserData();
  return (
    <div className="container">
      {userData ? (
        <>
          <h3 className="title">User Profile</h3>
          {/* <hr
            style={{
              borderColor: "lightgrey",
              padding: ".25em",
              borderRadius: "5em",
              width: "80%"
            }}
          ></hr> */}
          <br></br>
          <div className="columns" style={{ border: "" }}>
            <div
              className={joinClasses("column is-1", styles.dummyStyle)}
              style={{
                padding: 0
              }}
            >
              <ul className={joinClasses("list", styles.listDummyStyle)}>
                <li className={joinClasses("list-item", styles.liDummyStyle)}>Board</li>
                <li className={joinClasses("list-item", styles.liDummyStyle)}>Personen</li>
                <li className={joinClasses("list-item", styles.liDummyStyle)}>Geosuche</li>
                <li className={joinClasses("list-item", styles.liDummyStyle)}>Datenkorb</li>
              </ul>
            </div>

            <div className={joinClasses("column is-10", styles.dummyStyle)}>
              <div className="container is-fluid">
                <br></br>
                <br></br>
                <WidgetGrid></WidgetGrid>
              </div>
            </div>
            <div
              className={joinClasses("column is-1", styles.dummyStyle)}
              style={{
                backgroundColor: "",
                marginTop: "8em",
                border: "1px solid whitesmoke",
                boxShadow: "0.1em 0.1em 0.25em 0.1em whitesmoke"
              }}
            ></div>
          </div>

          <div>
            <FormattedMessage {...messages.name} />: {userData.username}
          </div>
          <div>
            <FormattedMessage {...messages.email} />: {userData.email}
          </div>
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default Profile;
