import React from "react";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

interface Props {
  classes?: Array<string>;
  backgrColor?: string;
  visible?: boolean;
}

const WidgetCard: React.FC<Props> = ({
  visible = true,
  classes = [""],
  backgrColor = "",
  children = null
}) => {
  return (
    <div
      className={joinClasses(styles.widgetCard, ...classes, "column")}
      style={{ backgroundColor: backgrColor, visibility: visible ? "initial" : "hidden" }}
    >
      {children}
    </div>
  );
};

export default WidgetCard;
