import React, { Fragment } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
// import Typing from 'react-typing-animation';
// import { Thumbnail } from 'react-bootstrap';

import Login from '../containers/Login';
import MainPage from '../containers/MainPage';
// import Transaction from '../containers/Transaction';
import SelectChildPage from './SelectChildModal';



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
        <Route exact path='/' component={MainPage} />
        <Route path='/login' component={Login} />
        <Route path='/selectchild' component={SelectChildPage} />
        {/* <Route path='/transaction' component={Transaction} /> */}

      </Switch>
    {/* } */}
      </Fragment>
    );
  }

export default App

