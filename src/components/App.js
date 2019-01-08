import React, { Fragment } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
// import Typing from 'react-typing-animation';
// import { Thumbnail } from 'react-bootstrap';

import Login from '../containers/Login';
import StartPage from '../containers/StartPage';

const App = () => {
  return(  

    <Fragment>

{/* !!!!!! Add animation later !!!!!!! */}

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
        <Route exact path='/' component={StartPage} />
        <Route path='/login' component={Login} />
      </Switch>
    {/* } */}
      </Fragment>
    );
  }

export default App

