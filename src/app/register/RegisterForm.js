import React from "react";
import { Form, Col, Button } from "react-bootstrap";
// import PropTypes from 'prop-types';

import "./RegisterForm.scss";


const initialState = {
  username: '',
  email: '',
  password: '',
  usernameError: null,
  emailError: null,
  passwordError: null,
  // disableButton: true
}

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  componentWillUnmount() {
    this.setState(initialState);
  }

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  }

  reset = () => {
    this.setState ({
      usernameError: '',
      emailError: '',
      passwordError: ''
    })
  }

  validate = () => {
    const { username, email, password } = this.state;
  
    if (username.length === 0) {
      this.setState({
        usernameError: 'Ange ett användarnamn.'
      })  
    }
  
    if (email.length === 0 ) {
      this.setState({
        emailError: 'Ange ditt email.'
      })
    }

    if (password.length === 0) {
      this.setState({
        passwordError: 'Ange ett lösenord.'
      })
    }
  }
  
  handleRegisterSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    this.reset();
    this.validate();

    if (username && email && password) {
      const { registerUser } = this.props;
      // registerUser(username, email, password);
    }
  }
  

  render() {
    const { username, email, password, usernameError, emailError, passwordError } = this.state;

    return (
      <div className="RegisterForm">
        <Col xs={12} sm={7} className="login__inner">
          <h2>Registrera dig</h2>

          <Form onSubmit={e => this.handleRegisterSubmit(e)}>
            <Form.Group controlId="username">
              <Form.Control 
                type="name" 
                placeholder="Användarnamn"
                onChange={e => this.handleUsernameChange(e)}
                value={username}
              />
              <Form.Text className="error-text">{usernameError}</Form.Text> 
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control 
                type="email"
                placeholder="E-post" 
                onChange={e => this.handleEmailChange(e)}
                value={email}
              />
              <Form.Text className="error-text">{emailError}</Form.Text> 
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Control 
                type="password"
                placeholder="Lösenord" 
                value={password}
                onChange={e => this.handlePasswordChange(e)}
              />
              <Form.Text className="error-text">{passwordError}</Form.Text> 
            </Form.Group>

            <Button type="submit" className="login__button">
              Registrera
            </Button>
          </Form>

        </Col>
      </div>
    );
  }
}