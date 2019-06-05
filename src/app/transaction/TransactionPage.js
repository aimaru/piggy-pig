import React, { Fragment} from "react";
import { Grid, Row, Col } from "react-bootstrap";

// import "./TransactionPage.scss";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import BottomMenu from "../../components/BottomMenu";
import Transaction from "../transaction/Transaction";

// import Aggregation from "./Aggregation";
// import SelectButton from "./SelectButton";
// import Goal from "./Goal";
// import TransactionList from './TransactionList';

export default class TransactionPage extends React.Component {
  render() {
    return (
<Fragment>
        {/* <Row className="show-grid"> */}
        <Header />
        {/* </Row> */}
        <main className="TransactionPage">
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={12} className="main-holder">
                <SideMenu />

                {/* !!!!! Change the components here by page !!!!!!!
                
                *Children
                  - HomeForChildren  <HomeForChildren />
                  - Transaction <Transaction />
                  - Assignment <Assignment />
                */}

                {/* <HomeForChildren /> */}
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
