import React, { Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
// import { Grid, Row, Fragment, Typing, Switch } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import "./Home.scss";


import Header from "../app/common/Header";
import SideMenu from "../app/common/SideMenu";
import BottomMenu from "../app/common/BottomMenu";
import HomeForChildren from "../app/home/HomeForChildren";
// import Transaction from "../components/Transaction";

export default class Home extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <Row className="show-grid"> */}
        <Header />
        {/* </Row> */}
        <main className="Home">
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={12} className="main-holder">
          
                {/* Components */} 
                  <SideMenu />
                  <HomeForChildren />
                  
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
