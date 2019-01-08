import React from "react";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "./SideMenu.scss";
// import { Thumbnail } from 'react-bootstrap';
// import PropTypes from 'prop-types';


// Icons made by <a href="https://www.flaticon.com/authors/vectors-market"	
// Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts"
// Icons made by <a href="https://www.flaticon.com/authors/smashicons"
// Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" 
import house from "./img/house.svg";
import transaction from "./img/transaction.svg";
import mission from "./img/mission.svg";
import logOut from "./img/log-out.svg";

const SIDEMENU_ICONS = [
  {
    id: 1,
    name: "Hem",
    img: house,
    buttonClassName: "house-btn",
    imgClassName: "house-icon"
  },
  {
    id: 2,
    name: "Transaktion",
    img: transaction,
    buttonClassName: "transaction-btn",
    imgClassName: "transaction-icon"
  },
  {
    id: 3,
    name: "Uppgifter",
    img: mission,
    buttonClassName: "mission-btn",
    imgClassName: "mission-icon"
  },
  {
    id: 4,
    name: "Loggut",
    img: logOut,
    buttonClassName: "logout-btn",
    imgClassName: "logout-icon"
  }
];

const sideMenu = () => (
  <aside>
    <Col xsHidden sm={3} md={2} className="SideMenu">
      <ListGroup>
        {SIDEMENU_ICONS.map(i => {
          return (
            <ListGroupItem>
              {/* <ButtonToolbar className="SelectButton"> */}
              {/* <Button  type="button" className={i.buttonClassName}> */}
                <img
                key={i.id}
                  className={i.imgClassName}
                  alt={i.imgClassName}
                  src={i.img}
                />
                <span>
                {i.name}
                </span>
              {/* </Button> */}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Col>
  </aside>
);

export default sideMenu;


