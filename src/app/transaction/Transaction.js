import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Transaction.scss";
// import Summary from "./Summary";
// import SelectButton from "./SelectButton";
// import SavingsGoal from "./SavingsGoal";
import TransactionList from './TransactionList';

const Transaction = () => (

  <Col xs={12} sm={9} md={10} className="Transaction">

    <Row>
      <Col xs={12} className="date-holder">
        <i className="fas fa-chevron-circle-left fa-2x" />
        <h2>2019-01 </h2>
        <i className="fas fa-chevron-circle-right fa-2x" />
      </Col>
    </Row>

    {/* Tabs */}
    <TransactionList />
  
  </Col>
 
);

export default Transaction;