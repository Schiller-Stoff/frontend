import React from "react";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

const Spinner: React.FC = () => {
  return (
    <div className={styles.centralizer}>
      <div className={joinClasses(styles["lds-ripple"], "level")}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
