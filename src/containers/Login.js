import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Login.scss";

// import PropTypes from 'prop-types';
// import App from './App';
// import Header from '../components/Header';
// import SideMenu from '../components/SideMenu';

export default class Login extends React.Component {
  render() {
    return (
      <Col xs={12} className="Login">
        {/* <Header />
        <SideMenu /> */}
        <Col xs={8} xsOffset={2}  className="holder">
          <p>Det är logga in sidan</p>
          <p>
            Gå till nästa sida <span>>>></span> <Link to="/"> Home </Link>
          </p>
          </Col>
          <Col xsOffset={2} /> 
      </Col>
    );
  }
}
