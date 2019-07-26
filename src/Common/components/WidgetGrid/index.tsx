import React, { useState, useEffect } from "react";
import WidgetCard from "./WidgetCard";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";
import { WidgetCardObj } from "Common/types";

interface Props {
  cardArray?: Array<WidgetCardObj>;
}

const WidgetGrid: React.FC<Props> = ({
  cardArray = [{ key: 3, orderNumber: 3, noPropGiven: true }]
}) => {
  //dynamic import (of bigger default) when no prop was given.
  //needs the useEffect Hook for only be run at mounting.
  useEffect(() => {
    if (cardArray[0].noPropGiven) {
      import("./propDefault").then(module => {
        console.warn(
          "No prop was given to the WidgetGrid component. Importing and displaying default grid now..."
        );
        setWidgetCardArray(module.cardObjArray);
      });
    }
  }, [cardArray]);

  const flipCardHandler = (dragInd: number, targetInd: number): void | ReferenceError => {
    console.debug("%c" + dragInd, "color:red;");
    console.debug("%c" + targetInd, "color:red;");
    if (dragInd === targetInd) throw new ReferenceError("Can't change position with itself.");
    if (!dragInd || !targetInd)
      throw new ReferenceError(
        `Invalid drag or drop element. Dragged elems index is: ${dragInd}; target elems index: ${targetInd}`
      );

    let cardsCopy = [...widgetCardArray];
    let dragCopy = { ...widgetCardArray[dragInd] };
    let tarCopy = { ...widgetCardArray[targetInd] };

    cardsCopy[targetInd] = dragCopy;
    cardsCopy[dragInd] = tarCopy;

    let curInd = 0;
    for (let card of cardsCopy) {
      card.orderNumber = curInd;
      curInd++;
    }

    setWidgetCardArray(cardsCopy);
  };

  const [widgetCardArray, setWidgetCardArray] = useState(cardArray);

  return (
    <>
      <div className={joinClasses("columns", styles.widgetGrid)}>
        <div className="column" style={{ width: "5000px" }}>
          <div className="columns is-multiline is-mobile">
            {widgetCardArray.map(card => {
              return (
                <WidgetCard
                  frontContent={card.frontContent}
                  backContent={card.backContent}
                  flipCard={flipCardHandler}
                  key={card.key}
                  classes={card.classes}
                  visible={card.visible || card.visible === undefined}
                  orderNumber={card.orderNumber}
                  backgrColor={card.backgrColor}
                ></WidgetCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetGrid;
