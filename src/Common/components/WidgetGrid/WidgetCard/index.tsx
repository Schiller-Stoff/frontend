import React, { useState } from "react";
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
  const [dragElem, setDragElem] = useState(null);

  const dragStartHandler = (event: any) => {
    console.log("%cdrag started", "color:blue; margin:5px; border-bottom: 2px dashed blue");
    let target: HTMLElement | any = event.target;
    if (target === null) return;

    setDragElem(target);
  };

  const dragHandler = (event: any) => {
    console.log("%cdragging", "color:blue; margin:5px; border-bottom: 2px dashed blue");
    let target: HTMLElement | any = dragElem;
    if (target === null) return;

    target.style.position = "absolute";
    target.style.left = event.clientX;
    target.style.top = event.clientY;
  };

  const dragEndHandler = () => {
    console.log("%cdrag ended", "color:blue; margin:5px; border-bottom: 2px dashed blue");
  };

  return (
    <div
      draggable
      onDragStart={dragStartHandler}
      onDragOver={dragHandler}
      //onDrop={dragEndHandler}
      onDragEnd={dragEndHandler}
      className={joinClasses(styles.widgetCard, ...classes, "column")}
      style={{ backgroundColor: backgrColor, visibility: visible ? "initial" : "hidden" }}
    >
      {children}
    </div>
  );
};

export default WidgetCard;
