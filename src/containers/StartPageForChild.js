import React, {Fragment} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import { Grid, Row, Fragment, Typing, Switch } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import './StartPageForChild.scss';

import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import BottomMenu from '../components/BottomMenu';
import AccountPageForChild from '../components/AccountPageForChild';


export default class StartPageForChild extends React.Component {
  
  render() {
    return (
      <Fragment >
         {/* <Row className="show-grid"> */}
          <Header />
        {/* </Row> */}
        <main className="StartPageForChild">
          <Grid fluid>
          <Row className="show-grid">
            <Col xs={12} className="main-holder">
              <SideMenu />
              <AccountPageForChild />
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
