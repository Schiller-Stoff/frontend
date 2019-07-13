import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  email: string;
  org?: string;
}

const UserInfoBox: React.FC<Props> = ({
  name = "Please enter a name",
  email = "Please enter an Email",
  org = ""
}) => {
  return (
    <div>
      {/* <div className={styles.imgContainer}></div> */}
      {/* <hr></hr> */}
      <div className={styles.shortInfo}>
        <h4>Account Info</h4>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Organisation: {org}</p>
      </div>
    </div>
  );
};

export default UserInfoBox;
