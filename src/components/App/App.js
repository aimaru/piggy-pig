import React, { Fragment } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
// import Typing from 'react-typing-animation';
// import { Thumbnail } from 'react-bootstrap';

import AppHolder from '../AppHolder/AppHolder';
import Login from '../AppHolder/Login';

const App = () => {
  return(  

    <Fragment>
      {/* {
    this.props.loginStore.isLoading ? */}
      {/* <div className="App">
        <header className="App-header">
          <Typing className="App-logo">
            <Thumbnail  href="/" alt="pig-logo" src={require('../img/piggybank.png')} />
            <h1>Piggy Pig</h1> 
          </Typing>
        </header>
      </div> */}
    {/* : */}
      <Switch>
        <Route exact path='/' component={AppHolder} />
        <Route path='/login' component={Login} />
      </Switch>
    {/* } */}
      </Fragment>
    );
  }

export default App

