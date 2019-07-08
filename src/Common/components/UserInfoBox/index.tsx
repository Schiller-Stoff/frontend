import React from "react";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

interface Props {
  name?: string;
  email?: string;
  org?: string;
}

const UserInfoBox: React.FC<Props> = ({
  name = "Please enter a name",
  email = "Please enter an Email",
  org = ""
}) => {
  return (
    <div className="columns">
      <div className={joinClasses("column is-4", styles.userInfoBoxColumn)}>
        <div className={styles.imgContainer}></div>
        <hr></hr>
        <div className={styles.shortInfo}>
          <h4>Account Info</h4>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Organisation: {org}</p>
        </div>
      </div>
      <div className={joinClasses("column", styles.userInfoBoxColumn)}></div>
    </div>
  );
};

export default UserInfoBox;
