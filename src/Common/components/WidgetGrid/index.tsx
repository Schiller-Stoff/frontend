import React from "react";
import WidgetCard from "./WidgetCard";
import WidgetControl from "./WidgetControl";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

const WidgetGrid: React.FC = () => {
  return (
    <>
      <div className={joinClasses("columns", styles.widgetGrid)}>
        <div className="column is-1">
          <WidgetControl></WidgetControl>
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              <WidgetCard></WidgetCard>
            </div>
            <div className="column">
              <WidgetCard></WidgetCard>
            </div>
            <div className="column">
              <WidgetCard></WidgetCard>
            </div>
            <div className="column">
              <WidgetCard></WidgetCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetGrid;
