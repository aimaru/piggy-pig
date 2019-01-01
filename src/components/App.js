
// import React, { Component} from 'react';
import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import StartPage from './StartPage';
import Login from './Login';



const App = () => {
return(  
    // <Fragment>
    //   <div className="App">
    //       <header className="App-header">
    //         {/* <img 
    //           src={logo} 
    //        className="App-logo" alt="logo" /> */}
    //          Piggy Pig 
    //       </header>
    //     </div>
   
  
    <Switch>
      <Route exact path='/' component={StartPage} />
      <Route path='/login' component={Login} />

      
       
      
    </Switch>




  

    
);
  }

  // const Home = () => (
    
  //   <div>
  //     <h1>test1</h1>
      
  //   </div>
  // )

  export default App



// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//       <div className="App">
//         <header className="App-header">
//           <img 
//           // src={logo} 
//           className="App-logo" alt="logo" />
//             Piggy Pig 
//         </header>
      
      
//       <Switch>
//         <Route  path="/test" component={Test} />
//       </Switch>
//       </div>
//       </Router>
//     );
//   }
// }

