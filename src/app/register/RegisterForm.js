import React from "react";
import { Form, Col, Button } from "react-bootstrap";
// import PropTypes from 'prop-types';

import "./RegisterForm.scss";


const initialState = {
  email: '',
  password: '',
  username: '',
  disableButton: false,
  canSubmit: false,
}

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    console.log('state', this.state)
  }

  componentWillUnmount() {
    this.setState(initialState);
  }

  handleUsernameChange = e => {
    const username = e.target.value;
    this.setState({
      // username: e.target.value
      username: username
    });
    console.log('user: ', e.target.value);
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
    console.log('email', e.target.value)
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
    console.log('password: ', e.target.value);
  }

  handlePasswordRepeatChange = e => {
    this.setState({
      password: e.target.value
    });
    console.log('password: ', e.target.value);
  }

  render() {
    // const { email, password, username} = this.state;
  
    return (
      <div className="RegisterForm">
        <Col xs={12} sm={7} className="login__inner">
          <h2>Registrera dig</h2>

          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Control 
                type="name" 
                placeholder="Användarname"
                onChange={ e => this.handleUsernameChange(e) }
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control 
                type="email" 
                placeholder="E-post" 
                // value={email}
                onChange={ e => this.handleEmailChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control 
                type="password" 
                placeholder="Lösenord" 
                onChange={ e => this.handlePasswordChange(e) }
              />
            </Form.Group>

            <Form.Group controlId="formBasicPasswordRepeat">
              <Form.Control 
                type="password" 
                placeholder="Bekräfta lösenord" 
                onChange={ e => this.handlePasswordRepeatChange(e) }
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="login__button">
              Logga in
              {/*  
                // onSubmit={e => this.handleSubmit(e)}
                // onClick={e => this.handleSubmit(e)} */}
            </Button>
          </Form>

        </Col>
      </div>
    );
  }
}


