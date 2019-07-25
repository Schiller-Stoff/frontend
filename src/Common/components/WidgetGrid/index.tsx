import React, { useState } from "react";
import WidgetCard from "./WidgetCard";
//import WidgetControl from "./WidgetControl";
import UserInfoBox from "../UserInfoBox";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

const WidgetGrid: React.FC = () => {
  const flipCardHandler = (dragInd: number, targetInd: number): void | ReferenceError => {
    console.log("%c" + dragInd, "color:red;");
    console.log("%c" + targetInd, "color:red;");
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

  const [widgetCardArray, setWidgetCardArray] = useState([
    {
      key: 0,
      classes: ["is-4"],
      orderNumber: 0,
      children: <UserInfoBox email="test" name="test" />
    },
    { key: 1, classes: ["is-8"], orderNumber: 1, backgrColor: "orange" },
    { key: 2, classes: ["is-2"], orderNumber: 2 },
    { key: 3, classes: ["is-5"], orderNumber: 3, backgrColor: "orange" },
    { key: 4, classes: ["is-5"], orderNumber: 4 },
    { key: 5, classes: ["is-5"], orderNumber: 5, visible: false },
    { key: 6, classes: ["is-3"], orderNumber: 6 }
  ]);

  return (
    <>
      <div className={joinClasses("columns", styles.widgetGrid)}>
        <div className="column" style={{ width: "5000px" }}>
          <div className="columns is-multiline is-mobile">
            {widgetCardArray.map(card => {
              return (
                <WidgetCard
                  flipCard={flipCardHandler}
                  key={card.key}
                  classes={card.classes}
                  visible={card.visible || card.visible === undefined}
                  orderNumber={card.orderNumber}
                  backgrColor={card.backgrColor}
                >
                  {card.children}
                </WidgetCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetGrid;
