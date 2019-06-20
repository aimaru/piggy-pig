import React, { Fragment} from "react";
import { 
  // Grid,
  Container, 
  Row, Col } from "react-bootstrap";

// import "./TransactionPage.scss";
import Header from "../common/Header";
import SideMenu from "../common/SideMenu";
import BottomMenu from "../common/BottomMenu";
import Transaction from "../transaction/Transaction";

// import Summary from "./Summary";
// import SelectButton from "./SelectButton";
// import SavingsGoal from "./SavingsGoal";
// import TransactionList from './TransactionList';

export default class TransactionPage extends React.Component {
  render() {
    return (
      <Fragment>
        
        <Header />

        <main className="TransactionPage">
          <Container fluid>
            <Row>
              <Col sm={3} lg={2} className="SideMenu">

                <SideMenu />

              </Col>
              <Col xs={12} sm={9}>
                <Container fluid>
                  <Row className="Home">
                    <Col xs={11} sm={11} md={9} className="HomeForChildren">

                      <Transaction />

                    </Col>
                  </Row> 
                </Container>
              </Col>
            </Row>
          </Container>
        </main> 

        <footer>
          <Container fluid>
            <Row>

            {/* Bottom menu is displayed only on mobile */}
            <BottomMenu />

            </Row>
          </Container>  
        </footer>
      
      </Fragment>
        
    );
  }
}
