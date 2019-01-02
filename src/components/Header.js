import React from 'react';
// import { Row, Col, Navbar } from 'react-bootstrap';
import { Row, Col, Navbar, Thumbnail } from 'react-bootstrap';

import './Header.scss';
// import pig-logo from './piggybank.png';
// import Login from './Login';


// import PropTypes from 'prop-types';
// import App from './App';

export default class Header extends React.Component {

  render() {
    return (
      <header className="Header container-fluid">
        <Row className="fixedTop">
          <Col>

            <Navbar >
              <Navbar.Header>
                <Navbar.Brand>
                  {/* <a href="/">Piggy pig</a>
                  <img  src={require('/.piggybank.png')} alt="pig-logo" />
                 Piggy Pig  */}
                       {/* <Image src={require('./piggybank.png')} href="/" rounded /> */}
                  <Thumbnail href="/" alt="pig-logo" src={require('./piggybank.png')} />
                </Navbar.Brand>
                <h1>Home</h1>
              </Navbar.Header>
              {/* <Nav className="text-center">
                <NavItem eventKey={1} href="#">
                  Home
                </NavItem>
              </Nav> */}
            </Navbar>   

          </Col>
        </Row>
      </header>
    
    );
  }

}
