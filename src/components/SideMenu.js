import React from "react";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "./SideMenu.scss";
// import { Thumbnail } from 'react-bootstrap';
// import PropTypes from 'prop-types';


// Icons made by <a href="https://www.flaticon.com/authors/vectors-market">	
// Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts">
// Icons made by <a href="https://www.flaticon.com/authors/smashicons">
// Icons made by <a href="https://www.flaticon.com/authors/dave-gandy">
import house from "./img/house.svg";
import transaction from "./img/transaction.svg";
import mission from "./img/mission.svg";
import logOut from "./img/log-out.svg";

const SIDEMENU_ICONS = [
  {
    id: 1,
    name: "Hem",
    img: house,
    alt: "house icon",
    imgClassName: "house-icon"
  },
  {
    id: 2,
    name: "Transaktion",
    img: transaction,
    alt: "transaction icon",
    imgClassName: "transaction-icon"
  },
  {
    id: 3,
    name: "Uppgifter",
    img: mission,
    alt: "mission icon",
    imgClassName: "mission-icon"
  },
  {
    id: 4,
    name: "Loggut",
    img: logOut,
    alt: "logout icon",
    imgClassName: "logout-icon"
  }
];

const SideMenu = () => (
  <aside>
    <Col xsHidden sm={3} md={2} className="SideMenu">
      <ListGroup>
        {SIDEMENU_ICONS.map(i => {
          return (
            <ListGroupItem key={i.id}>
              {/* <ButtonToolbar className="SelectButton"> */}
              {/* <Button  type="button" className={i.buttonClassName}> */}
                <img
                  className={i.imgClassName}
                  alt={i.alt}
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

export default SideMenu;


