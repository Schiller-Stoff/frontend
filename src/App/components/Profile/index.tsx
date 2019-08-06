import { useUserData } from "Data/hooks/useUserData";
import React from "react";
import DashBoard from "../DashBoard";
import Spinner from "Common/components/PageTransition/Spinner";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

const Profile: React.FC = () => {
  const userData = useUserData();
  return (
    <div className="container">
      {userData ? (
        <>
          <br></br>
          <br></br>
          <hr
            style={{
              borderColor: "lightgrey",
              backgroundColor: "whitesmoke",
              padding: ".35em",
              borderRadius: "",
              width: "25%"
            }}
          ></hr>
          <br></br>
          <h3 className="title">User Profile</h3>

          <div className="columns" style={{ border: "" }}>
            <div
              className={joinClasses("column is-1", styles.dummyStyle)}
              style={{
                padding: 0
              }}
            >
              <ul className={joinClasses("list", styles.listDummyStyle)}>
                <li className={joinClasses("list-item", styles.liDummyStyle)}>Start</li>
                <li className={joinClasses("list-item", styles.liDummyStyle)}>Logout</li>
                <li className={joinClasses("list-item", styles.liDummyStyle)}>Help</li>
                <li className={joinClasses("list-item", styles.liDummyStyle)}>About</li>
              </ul>
            </div>

            <div className={joinClasses("column is-11", styles.dummyStyle)}>
              <div className="container is-fluid">
                <br></br>
                <br></br>
                <DashBoard userData={userData} />
              </div>
            </div>
            {/* <div
              className={joinClasses("column is-1", styles.dummyStyle)}
              style={{
                backgroundColor: "",
                marginTop: "8em",
                border: "1px solid lightgrey",
                borderRadius: ".5em",
                boxShadow: "0.1em 0.1em 0.25em 0.1em lightgrey"
              }}
            ></div> */}
          </div>
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default Profile;
