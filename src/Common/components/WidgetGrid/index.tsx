import React, { useState } from "react";
import WidgetCard from "./WidgetCard";
//import WidgetControl from "./WidgetControl";
import UserInfoBox from "../UserInfoBox";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

const WidgetGrid: React.FC = () => {
  const flipCardHandler = (dragInd: number, targetInd: number) => {
    console.log("%c" + dragInd, "color:red;");
    console.log("%c" + targetInd, "color:red;");
    //if(dragInd===targetInd)return;

    let cardsCopy = [...widgetCardArray];

    let dragCopy;
    let tarCopy;

    dragCopy = { ...widgetCardArray[dragInd] };
    tarCopy = { ...widgetCardArray[targetInd] };

    console.log(dragCopy.props.classes[0]);
    console.log(tarCopy.props.classes[0]);
    console.log("------");

    cardsCopy[targetInd] = dragCopy;
    cardsCopy[dragInd] = tarCopy;
    console.log(cardsCopy.map(_ => _.props.classes[0]));

    let cardsCopy02 = [];
    let curInd = 0;
    for (let card of cardsCopy) {
      let key = card.key as number;
      let newCard = (
        <WidgetCard
          flipCard={flipCardHandler}
          key={key}
          classes={card.props.classes}
          visible={card.props.visible}
          orderNumber={curInd}
          backgrColor={card.props.backgrColor}
        >
          {card.props.children}
        </WidgetCard>
      );
      cardsCopy02.push(newCard);
      curInd++;
      console.log(card.props.classes[0]);
    }

    setWidgetCardArray(cardsCopy02);
  };

  const [widgetCardArray, setWidgetCardArray] = useState([
    <WidgetCard key={1} classes={["is-4"]} orderNumber={0} flipCard={flipCardHandler}>
      <UserInfoBox email="test" name="test" />
    </WidgetCard>,
    <WidgetCard key={2} classes={["is-8"]} orderNumber={1} flipCard={flipCardHandler}></WidgetCard>,
    <WidgetCard
      key={3}
      classes={["is-2"]}
      backgrColor="tomato"
      orderNumber={2}
      flipCard={flipCardHandler}
    ></WidgetCard>,
    <WidgetCard key={4} classes={["is-5"]} orderNumber={3} flipCard={flipCardHandler}></WidgetCard>,
    <WidgetCard
      key={5}
      classes={["is-5"]}
      orderNumber={4}
      backgrColor="orange"
      flipCard={flipCardHandler}
    ></WidgetCard>,
    <WidgetCard key={6} classes={["is-3"]} orderNumber={5} flipCard={flipCardHandler}></WidgetCard>
  ]);

  return (
    <>
      <div className={joinClasses("columns", styles.widgetGrid)}>
        <div className="column" style={{ width: "5000px" }}>
          <div className="columns is-multiline is-mobile">
            {widgetCardArray.map(comp => {
              return comp;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetGrid;
