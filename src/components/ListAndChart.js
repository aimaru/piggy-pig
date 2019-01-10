import React from "react";
import { Row, Col, Tabs, Tab, ListGroup, ListGroupItem } from "react-bootstrap";

import "./ListAndChart.scss";
import ListItem from "./ListItem";

const ListAndChart = () => (
  <Row className="show-grid">
    <Col xs={9} className="ListAndChart">
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="LISTA - hur mycket använt/sparat dina pengar">
          <ListGroup className="list-holder">
            <ListGroupItem>
              <ListItem />
            </ListGroupItem>
          </ListGroup>
        </Tab>

        <Tab eventKey={2} title="DIAGRAM - analyserar dina pengar)">
          Diagram
        </Tab>
      </Tabs>
    </Col>
  </Row>
);

export default ListAndChart;
