import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Transaction.scss";
// import ChildrenCard from "./ChildrenCard";
// import SelectButton from "./SelectButton";
// import Goal from "./Goal";
import ListAndChart from './ListAndChart';

const Transaction = () => (

  <Col xs={12} sm={9} md={10} className="Transaction">

    <Row className="show-grid">
      <Col xs={12} className="date-holder">
        <i className="fas fa-chevron-circle-left fa-2x" />
        <h2>2019-01 </h2>
        <i className="fas fa-chevron-circle-right fa-2x" />
      </Col>
    </Row>

    {/* Tabs */}
    <ListAndChart />
  
  </Col>
 
);

export default Transaction;