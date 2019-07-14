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
  const [dragElem, setDragElem] = useState<HTMLElement | undefined>(undefined);

  const dragStartHandler = (event: any) => {
    console.log("%cdrag started", "color:blue; margin:5px; border-bottom: 2px dashed blue");
    let target: HTMLElement = event.target;
    if (target === null) return;

    setDragElem(target);
  };

  const dragHandler = (event: any) => {
    console.log("%cdragging", "color:blue; margin:5px; border-bottom: 2px dashed blue");
    console.log(dragElem);
    console.log(event.clientX);
    console.log(event.clientY);
    if (!dragElem) return;

    dragElem.style.position = "fixed";
    dragElem.style.left = event.clientX + "px";
    dragElem.style.top = event.clientY + "px";

    //dragElem.style.transform = "translate3d(" + event.clientX/4 + "px, " + event.clientY/4 + "px, 0)"
  };

  const dragEndHandler = () => {
    console.log("%cdrag ended", "color:blue; margin:5px; border-bottom: 2px dashed blue");
  };

  return (
    <div
      draggable
      onDragStart={dragStartHandler}
      onDrag={dragHandler}
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
