import React, { useState } from "react";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

interface Props {
  orderNumber: number;
  flipCard: Function;
  classes?: Array<string>;
  backgrColor?: string;
  visible?: boolean;
  frontContent?: JSX.Element | HTMLElement | null;
  backContent?: JSX.Element | HTMLElement | null;
}

const WidgetCard: React.FC<Props> = ({
  visible = true,
  classes = ["is-4"],
  backgrColor = "",
  children = null,
  orderNumber,
  flipCard,
  frontContent = null,
  backContent = null
}) => {
  const [dragElem, setDragElem] = useState<HTMLElement | undefined>(undefined);
  const [dragWidth, setDragWidth] = useState<number | undefined>(undefined);
  const [dragHeight, setDragHeight] = useState<number | undefined>(undefined);
  //const [dragOver, setDragOvered] = useState<HTMLElement | undefined>(undefined);

  const [animString, setAnimString] = useState<string>("animated once zoomIn");

  const [cardStyle, setCardStyle] = useState<{ backgrColor: string; color: string } | null>(null);

  const restoreCss = (elem: HTMLElement): HTMLElement => {
    elem.style.position = "";
    elem.style.top = "";
    elem.style.left = "";
    elem.style.width = "";
    elem.style.height = "";
    elem.style.zIndex = "";
    elem.style.transform = "";
    elem.style.boxShadow = "";
    elem.style.visibility = "visible";
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
    target.style.transform = "rotate(-10deg)";
    target.style.boxShadow = "10px 10px 10px 1px lightgrey";
  };

  const stylePresets: Array<{ backgrColor: string; color: string }> = [
    { backgrColor: "#26547C", color: "whitesmoke" },
    { backgrColor: "#FFD166", color: "black" },
    { backgrColor: "#FCFCFC", color: "black" },
    { backgrColor: "#EF476F", color: "whitesmoke" }
  ];

  const switchColor = () => {
    if (!cardStyle) return setCardStyle(stylePresets[0]);
    let curColInd = stylePresets.map(preset => preset.backgrColor).indexOf(cardStyle.backgrColor);
    return setCardStyle(stylePresets[curColInd + 1]);
  };

  const dragHandler = (event: any) => {
    console.debug("%cdragging", "color:blue; margin:5px; border-bottom: 2px dashed blue");
    if (!dragElem) return;

    dragElem.style.position = "fixed";

    if (!dragWidth || !dragHeight) return;

    let newLeft: number = event.clientX - dragWidth / 2;
    let newTop: number = event.clientY - dragHeight / 2;

    //dirty solution for animation drop stuttering.
    if (newLeft <= 0 || newTop <= 0) {
      dragElem.style.visibility = "hidden";
    } else {
      dragElem.style.visibility = "visible";
    }

    dragElem.style.left = newLeft + "px";
    dragElem.style.top = newTop + "px";
  };

  const dragEndHandler = (event: any) => {
    console.debug("%cdrag ended", "color:blue; margin:5px; border-bottom: 2px dashed blue");
    if (!dragElem) return;

    let x = event.clientX;
    let y = event.clientY;

    let dropTarget = document.elementFromPoint(x, y);

    if (dragElem === dropTarget) return restoreCss(dragElem);
    if (!dropTarget) return restoreCss(dragElem);

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

    try {
      flipCard(dragInd, targetInd);
    } catch {
      console.debug("flipCard failed");
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

  const randAnimStart = (): string => {
    let rand = parseFloat(Math.random().toFixed(2)) - 0.4;
    return rand > 0.01 ? `${rand}s` : `0.01s`;
  };

  // removes animation css causes bugs otherwise
  setTimeout(() => {
    setAnimString("");
  }, 1000);

  return (
    <div
      className={joinClasses(...classes, "column", styles.cardContainer, animString)}
      style={{ animationDelay: randAnimStart(), animationDuration: ".25s" }}
    >
      <div
        draggable
        onDragStart={dragStartHandler}
        onDrag={dragHandler}
        //onDrop={dragEndHandler}

        //onDragOver={dragEnterHandler}
        //onDragLeave={dragLeaveHandler}

        onDragEnd={dragEndHandler}
        className={joinClasses(styles.widgetCard, styles["flip-card"])}
        style={{
          backgroundColor: cardStyle ? cardStyle.backgrColor : backgrColor,
          color: cardStyle ? cardStyle.color : "",
          visibility: visible ? "initial" : "hidden"
        }}
        data-order-number={orderNumber}
      >
        <div className={styles["flip-card-inner"]}>
          <div
            className={styles["flip-card-front"]}
            style={{ color: cardStyle ? cardStyle.color : "" }}
          >
            {frontContent}
          </div>
          <div
            className={styles["flip-card-back"]}
            style={{ color: cardStyle ? cardStyle.color : "" }}
          >
            <button onClick={switchColor} className="button" style={{ float: "right" }}>
              ...
            </button>
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
