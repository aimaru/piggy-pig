import React from "react";
// import {Link} from 'react-router-dom';
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "./SideMenu.scss";
// import { Thumbnail } from 'react-bootstrap';
// import PropTypes from 'prop-types';

// import Transaction from './Transaction';

// Icons made by <a href="https://www.flaticon.com/authors/vectors-market">	
// Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts">
// Icons made by <a href="https://www.flaticon.com/authors/smashicons">
// Icons made by <a href="https://www.freepik.com/" title="Freepik">
// Icons made by <a href="https://www.flaticon.com/authors/dave-gandy">
import house from "./img/house.svg";
import transaction from "./img/transaction.svg";
import assignment from "./img/assignment.svg";
import logOut from "./img/log-out.svg";
import alien from "./img/alien.svg";

const SIDEMENU_ICONS = [
  {
    id: 1,
    name: "Hem",
    img: house,
    alt: "house icon",
    // link: "/",
    imgClassName: "house-icon"
  },
  {
    id: 2,
    name: "Transaktion",
    img: transaction,
    // alt: "transaction icon",
    // link: "/transaction",
    imgClassName: "transaction-icon"
  },
  {
    id: 3,
    name: "Uppgifter",
    img: assignment,
    alt: "assignment icon",
    // link: "/assignment",
    imgClassName: "assignment-icon"
  },
  {
    id: 4,
    name: "Om mig",
    img: alien,
    alt: "alien icon",
    // link: "/assignment",
    imgClassName: "alien-icon"
  },
  {
    id: 5,
    name: "Loggut",
    img: logOut,
    alt: "logout icon",
    // link: "/logout",
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
               
             
              {/* <Link to={i.link}> */}
                <img
                  className={i.imgClassName}
                  alt={i.alt}
                  src={i.img}
                />
                <span>{i.name} </span>
                {/* </Link>  */}
              {/* </Button> */}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Col>
  </aside>
);

export default SideMenu;


