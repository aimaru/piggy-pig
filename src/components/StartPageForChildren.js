import React, { Fragment } from "react";
import { Col } from "react-bootstrap";

import "./StartPageForChildren.scss";
import ChildrenCard from "./ChildrenCard";
import SelectButton from "./SelectButton";
import Goal from "./Goal";

// import house from '../components/img/house.svg';

const StartPageForChildren = () => (
  <Fragment>
    <Col xs={12} sm={9} md={10} className="StartPageForChildrene">
      <Col xs={12} className="avatar">
        <ChildrenCard />
      </Col>

      <Col xs={12} className="button">
        <h2>Lägg till dagens ... </h2>
        <SelectButton />
      </Col>

      <Col xs={12} className="goal-holder">
        <h2>Månadens mål</h2>
        <Goal />
      </Col>

    </Col>
  </Fragment>
);

export default StartPageForChildren;
