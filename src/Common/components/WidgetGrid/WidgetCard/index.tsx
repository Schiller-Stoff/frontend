import React, { useState } from "react";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

interface Props {
  classes?: Array<string>;
  backgrColor?: string;
  visible?: boolean;
  orderNumber?: number;
  flipCard?: Function;
  frontContent?: JSX.Element | HTMLElement;
  backContent?: JSX.Element | HTMLElement;
}

const WidgetCard: React.FC<Props> = ({
  visible = true,
  classes = [""],
  backgrColor = "",
  children = null,
  orderNumber = null,
  flipCard = undefined,
  frontContent = null,
  backContent = null
}) => {
  const [dragElem, setDragElem] = useState<HTMLElement | undefined>(undefined);
  const [dragWidth, setDragWidth] = useState<number | undefined>(undefined);
  const [dragHeight, setDragHeight] = useState<number | undefined>(undefined);
  //const [dragOver, setDragOvered] = useState<HTMLElement | undefined>(undefined);

  const restoreCss = (elem: HTMLElement): HTMLElement => {
    elem.style.position = "";
    elem.style.top = "";
    elem.style.left = "";
    elem.style.width = "";
    elem.style.height = "";
    elem.style.zIndex = "";
    return elem;
  };

  const dragStartHandler = (event: any) => {
    console.debug("%cdrag started", "color:blue; margin:5px; border-bottom: 2px dashed blue");
    let target: HTMLElement = event.target;
    if (!target) return;

    // disabling the default drag image.
    let dragIcon = document.createElement("img");
    dragIcon.src = "ghost.png";
    dragIcon.width = 100;
    event.dataTransfer.setDragImage(dragIcon, -10, -10);

    setDragElem(target);
    let boundingRect = target.getBoundingClientRect();
    setDragWidth(boundingRect.width);
    setDragHeight(boundingRect.height);

    //needs to be deleted again when finished.
    target.style.width = boundingRect.width + "px";
    target.style.height = boundingRect.height + "px";
    target.style.zIndex = "100";
  };

  const dragHandler = (event: any) => {
    console.debug("%cdragging", "color:blue; margin:5px; border-bottom: 2px dashed blue");
    if (!dragElem) return;

    dragElem.style.position = "fixed";

    if (!dragWidth || !dragHeight) return;
    dragElem.style.left = event.clientX - dragWidth / 2 + "px";
    dragElem.style.top = event.clientY - dragHeight / 2 + "px";
  };

  const dragEndHandler = (event: any) => {
    console.debug("%cdrag ended", "color:blue; margin:5px; border-bottom: 2px dashed blue");
    if (!dragElem) return;

    let x = event.clientX;
    let y = event.clientY;

    let dropTarget = document.elementFromPoint(x, y);

    if (!dropTarget) return;

    try {
      dropTarget = recFindParent(dropTarget, "column") as Element;
    } catch {
      console.debug(`No dropable element found inside dragEndHandler`);
      restoreCss(dragElem);
      return;
    }

    //getting targets and sources orderNumber
    let targetInd = dropTarget.children[0].getAttribute("data-order-number");
    let dragInd = dragElem.getAttribute("data-order-number");

    if (!flipCard) return;

    try {
      flipCard(dragInd, targetInd);
    } catch {
      console.debug("");
    } finally {
      restoreCss(dragElem);
    }
  };

  /* const dragEnterHandler = (event: any) => {
    let x = event.clientX;
    let y = event.clientY;
    let draggedOver = document.elementsFromPoint(x, y);

    if (draggedOver.length > 0) {
      for (let i = 0; i < draggedOver.length; i++) {
        let child = draggedOver[i] as HTMLElement;
        child.style.transition = "background-color .25s";

        if (child.draggable && child !== event.target) {
          setDragOvered(child);
          child.style.backgroundColor = "red";
        }
      }
    }
  }; */

  /* const dragLeaveHandler = (event: any) => {
    if (!dragOver) return;
    dragOver.style.transition = "";
    dragOver.style.backgroundColor = "";
    setDragOvered(undefined);
  }; */

  const recFindParent = (elem: Element, className: string): Element | ErrorEvent => {
    if (elem.classList.contains(className)) return elem;

    let parent: HTMLElement | null = elem.parentElement;
    if (!parent)
      throw new ErrorEvent(
        `Can't find parent element with classname ${className}. Last checked elem: ${{ ...elem }}`
      );

    return recFindParent(parent, className);
  };

  return (
    <div className={joinClasses(...classes, "column", styles.cardContainer)}>
      <div
        draggable
        onDragStart={dragStartHandler}
        onDrag={dragHandler}
        //onDrop={dragEndHandler}

        //onDragOver={dragEnterHandler}
        //onDragLeave={dragLeaveHandler}

        onDragEnd={dragEndHandler}
        className={joinClasses(styles.widgetCard, styles["flip-card"])}
        style={{ backgroundColor: backgrColor, visibility: visible ? "initial" : "hidden" }}
        data-order-number={orderNumber}
      >
        <div className={styles["flip-card-inner"]}>
          <div className={styles["flip-card-front"]}>{frontContent}</div>
          <div className={styles["flip-card-back"]}>{backContent}</div>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
