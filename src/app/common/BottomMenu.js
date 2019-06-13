import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import './BottomMenu.scss';

// Icons
import house from './img/house.svg';
import piggyMenu from './img/piggybank-menu2.svg';
import getMoney from './img/get-money.svg';
import logOut from './img/log-out.svg';

// import PropTypes from 'prop-types';

export default class BottomMenu extends React.Component {

  render() {
    return (
      <footer>
        <Col xs={12} className="BottomMenu">
          <ListGroup defaultActiveKey="/">

            <ListGroup.Item action href="/">
              <img src={house} alt="house icon" className="home-icon" />
              <p>Hem</p>
            </ListGroup.Item>

            <ListGroup.Item action href="#" >
              <img src={piggyMenu} alt="piggybank icon" className="piggybank-icon" />
              <p>Transaktion</p>
            </ListGroup.Item>
            
            <ListGroup.Item action href="#">
              <img src={getMoney} alt="money icon" className="money-icon" />
              <p>Uppgifter</p>
            </ListGroup.Item>

            <ListGroup.Item action href="#">
              <img src={logOut} alt="log out icon" className="log-out-icon" />
              <p>Logg ut</p>
            </ListGroup.Item>

          </ListGroup>
        </Col>
      </footer>
    );
  }
};
