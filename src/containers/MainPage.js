import React, { Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
// import { Grid, Row, Fragment, Typing, Switch } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import "./MainPage.scss";

import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import BottomMenu from "../components/BottomMenu";
import StartPageForChildren from "../components/StartPageForChildren";
import Transaction from "../components/Transaction";

export default class MainPage extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <Row className="show-grid"> */}
        <Header />
        {/* </Row> */}
        <main className="MainPage">
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={12} className="main-holder">
                <SideMenu />

                {/* !!!!! Change the components here by page !!!!!!!
                
                <Children>
                  - StartPageForChildren  <StartPageForChildren />
                  - Transaction <Transaction />
                  - Mission <Mission />
                */}

                {/* <StartPageForChildren /> */}
                <Transaction />
                
              </Col>
            </Row>
          </Grid>
          {/* <Row className="show-grid"> */}
          {/* <BottomMenu /> */}
          {/* </Row> */}
        </main>
        {/* <Row className="show-grid"> */}
        <BottomMenu />
        {/* </Row> */}
      </Fragment>
    );
  }
}
