import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

import Aggregation from "./Aggregation";
import AddTransaction from "../transaction/AddTransaction";
import Goal from "../../components/Goal";
import "./HomeForChildren.scss";

const HomeForChildren = () => (
  <Fragment>
    <Col xs={12} sm={9} md={10} className="HomeForChildren">

      <Row className="show-grid">
        <Aggregation />
      </Row>

      <Row className="show-grid">
        <h2>Lägg till dagens ... </h2>
        <AddTransaction />
      </Row>

      <Row className="show-grid">
        <h2>Månadens mål</h2>
        <Goal />
      </Row>
      
    </Col>
  </Fragment>
);

export default HomeForChildren;
