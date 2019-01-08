import React from "react";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "./SelectButton.scss";

// Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio">
// Icons made by <a href="https://www.flaticon.com/authors/twitter">
// Icons made by <a href="https://www.freepik.com/">
// Icons made by <a href="https://www.flaticon.com/authors/itim2101">
import goal from "./img/goal.svg";
import savings from "./img/savings.svg";
import dollar from "./img/dollar.svg";


const SELECT_ICONS = [
  {
    id: 22,
    name: "Intjänade pengar",
    img: savings,
    alt: "piggy bank icon",
    buttonClassName: "savings-btn",
    imgClassName: "savings-icon"
  },
  {
    id: 23,
    name: "Använda pengar",
    img: dollar,
    alt: "dollar icon",
    buttonClassName: "dollar-btn",
    imgClassName: "dollar-icon"
  },
  {
    id: 24,
    name: "Färdiga uppgifter",
    img: goal,
    alt: "goal icon",
    buttonClassName: "goal-btn",
    imgClassName: "goal-icon"
  }
];


const SelectButton = () => (
  <Col xsOffset={1} xs={10} className="SelectButton">
    <ListGroup>
      
      {/* <ButtonToolbar className="SelectButton"> */}
      {SELECT_ICONS.map(i => {
        return (
          <ListGroupItem key={i.id} className={i.buttonClassName}>
            {/* <Button type="button"> */}
            <img
              className={i.imgClassName}
              alt={i.alt}
              src={i.img}
            />
            <span>{i.name}</span>
            {/* </Button> */}
          </ListGroupItem>
        );
      })}
    </ListGroup>

    <Col xsOffset={1} />
  </Col>
);

export default SelectButton;
