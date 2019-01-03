import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';

// import registerServiceWorker from './registerServiceWorker';



// Storeを作るときに必要
// import { Provider } from 'react-redux';
// import createStore from './createReduxStore';

// const store = createStore();

// ReactDOM.render(
// <Provider store={store}>
//   <App />
//   </Provider>,
//   document.getElementById('root'));

  ReactDOM.render(
    <BrowserRouter>
      <App />
      </BrowserRouter>,
      document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
