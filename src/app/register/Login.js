import React from "react";
import { Grid, Row, Col, Tabs, Tab, ButtonToolbar, Button, Checkbox } from "react-bootstrap";
import { Link } from "react-router-dom";
 
import FieldGroup from "../common/FieldGroup";
import "./Login.scss";
// import "../scss/Login.scss";
// import "../scss/mixins.scss";

// import PropTypes from 'prop-types';
// import App from './App';

export default class Login extends React.Component {
  render() {
    return (
        <div className="Login">
          <Col xs={10} sm={8} className="login__wrapper">
            <Grid fluid>

              <Row>
                  <Col xs={12} className="login__tabs">
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">

                      {/* Tab 1 - Login */}
                      <Tab eventKey={1} title="Logga in">
                        <Col sm={12}>
                          <h2>Logga in</h2>
                          <form>
                            <FieldGroup
                              id="formControlsEmail"
                              type="email"
                              placeholder="E-post"
                            />
                            <FieldGroup
                              id="formControlsText"
                              type="password"
                              placeholder="Lösenord"
                            />
                          </form>
                          <div className="login__forgot-psw">
                            <Link to="/"> Glömt lösenord? </Link>
                          </div>
                          <ButtonToolbar>
                            <Button type="submit" className="login__button"
                            // 動作確認するために、onClick にするが、データベースの準備ができたら、onsubmitにする
                            // onSubmit={e => this.handleSubmit(e)}

                            // onClick={e => this.handleSubmit(e)}
                            >
                              Logga in
                            </Button>
                          </ButtonToolbar>
                          <Checkbox checked readOnly className="login__remember-me">
                            Kom ihåg mig
                          </Checkbox>
                        </Col>
                      </Tab>

                      {/* Tab 2 - Register */}
                      <Tab eventKey={2} title="Registrera dig">
                        Registrera dig
                      </Tab>
                    </Tabs>
                  </Col>
                </Row>


                          </Grid>
                        </Col> 
                      </div>
                  );
                }
              }
