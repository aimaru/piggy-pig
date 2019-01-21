import React from "react";
// import { Thumbnail } from "react-bootstrap";
import "./App.scss";
import {
  Route, 
  // Link
    // Switch
} from "react-router-dom";
// import Typing from 'react-typing-animation';

import Login from "../containers/Login";
import Home from "../containers/Home";
import TransactionPage from '../containers/TransactionPage';
import AssignmentPage from '../containers/AssignmentPage';
import AboutMe from '../containers/AboutMe';


// import piggybank from "./img/piggybank.png";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Route exact path="/" component={Transaction} /> */}

        {/* !!!!!! Add animation later !!!!!!! */}

        {/* {
    this.props.loginStore.isLoading ? */}
        {/* <div className="App">
        <header className="App-header">
          <Typing className="App-logo"> */}
          {/* <Link to="/login"> */}
          {/* <img
                  className="pig"
                 
                  alt="Pig Icon"
                  src={piggybank}
                /> */}
           {/* </Link> */}
            {/* <Thumbnail alt="pig-logo" 
            src={require('../components/img/piggybank-menu2.svg')} />
         
            <h1>Piggy Pig</h1> 
          </Typing>
        </header>
      </div> */}
        {/* : */}
        {/* <Switch> */}
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/transaction" component={Transaction} /> */}

        {/* <Redirect to="/" /> */}

        {/* <Switch> */}
        {/* } */}

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/transaction" component={TransactionPage} />
        <Route path="/assignment" component={AssignmentPage} />
        <Route path="/aboutme" component={AboutMe} /> 

      </div>
    );
  }
}
