import React, { useState } from "react";
import WidgetCard from "./WidgetCard";
import { joinClasses } from "Common/utils/joinClasses";
import { WidgetCardObj } from "Common/types";

interface Props {
  cardArray: Array<WidgetCardObj> | null;
}

const WidgetGrid: React.FC<Props> = ({ cardArray }) => {
  const flipCardHandler = (dragInd: number, targetInd: number): void | ReferenceError => {
    if (!widgetCardArray) return;
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

    setWidgetCardArray(cardsCopy);
  };

  const [widgetCardArray, setWidgetCardArray] = useState(cardArray);

  return (
    <>
      <div className={joinClasses("columns")}>
        <div className="column">
          <div className="columns is-multiline is-mobile">
            {widgetCardArray
              ? widgetCardArray.map((card, ind) => {
                  return (
                    <WidgetCard
                      frontContent={card.frontContent}
                      backContent={card.backContent}
                      flipCard={flipCardHandler}
                      key={card.key}
                      classes={card.classes}
                      visible={card.visible || card.visible === undefined}
                      orderNumber={ind}
                      backgrColor={card.backgrColor}
                    ></WidgetCard>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetGrid;
