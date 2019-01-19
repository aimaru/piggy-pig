import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

import "./HomeForChildren.scss";
import Aggregation from "./Aggregation";
// import TransactionModal from "./TransactionModal";
import AddIncomeModal from "./AddIncomeModal";

// import SelectButton from "./SelectButton";
import Goal from "./Goal";

// import house from '../components/img/house.svg';

const HomeForChildren = () => (
  <Fragment>
    <Col xs={12} sm={9} md={10} className="HomeForChildren">
      
      <Row className="show-grid">
        {/* <Col xs={12} className="avatar"> */}
          <Aggregation  />
        {/* </Col> */}
      </Row>

      <Row className="show-grid">
        {/* <Col xs={12} className="button"> */}
          <h2>Lägg till dagens ... </h2>
          {/* <SelectButton /> */}
          {/* <TransactionModal store={this.props.sotre} /> */}
        <AddIncomeModal 
        // store={this.props.sotre} 
        />

        {/* </Col> */}
      </Row>

      <Row className="show-grid">
        {/* <Col xs={12} className="goal-holder"> */}
          <h2>Månadens mål</h2>
          <Goal />
        {/* </Col> */}
      </Row>
    </Col>
  </Fragment>
);

export default HomeForChildren;
