import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './BottomMenu.scss';
// import { Thumbnail } from 'react-bootstrap';

import house from './img/house.svg';
import piggyMenu from './img/piggybank-menu2.svg';
import getMoney from './img/get-money.svg';
import logOut from './img/log-out.svg';

// import PropTypes from 'prop-types';

export default class BottomMenu extends React.Component {

  render() {
    return (
      <footer className="BottomMenu">
      <Grid fluid>
        <Row>
      <Col xs={3} mdHidden lgHidden className="BottomMenu">
        <div>
          <img src={house} alt="house icon" className="home-icon" />
          <p>Hem</p>
        </div>
        <div>
          <img src={piggyMenu} alt="piggybank icon" className="piggybank-icon" />
          <p>Transaktion</p>
        </div>
        <div>
          <img src={getMoney} alt="money icon" className="money-icon" />
          <p>Uppgifter</p>
        </div>
        <div>
          <img src={logOut} alt="log out icon" className="log-out-icon" />
          <p>Loggut</p>
        </div>
    
      </Col>
      </Row>
      </Grid>
      </footer>
   
    );
  }

}
