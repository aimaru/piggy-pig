import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import rootReducer from '../src/reducers/reducers.js'

// import { Thumbnail } from "react-bootstrap";
// import Typing from 'react-typing-animation';

import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import { Route } from 'react-router-dom';
// import Home from './containers/Home';
// import Login from './containers/Login';



// import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  rootReducer,
  // composeWithDevTools)
compose(process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f))

console.log('store.getState() i !!!!!!', store.getState()); 

// const render = () => {

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <div>

        {/* <div>
        <header className="App-header">
          <Typing className="App-logo">
            <Thumbnail  href="/" alt="pig-logo" src={require('../src/components/img/piggybank-menu2.svg')} />
            <h1>Piggy Pig</h1> 
          </Typing>
        </header>
          </div> */}

        <App />
       

        </div>
      </BrowserRouter>
    </Provider>,
      document.getElementById('root'));
    // }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// store.subscribe(() => {

//   console.log(store.getState().income)
//   render ()
//   console.log(store.getState().income)
// })
// render()