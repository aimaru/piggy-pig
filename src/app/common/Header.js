import React from 'react';
import { Image } from 'react-bootstrap';

import './Header.scss';
// import PropTypes from 'prop-types';

// export default class Header extends React.Component {
//   constructor (props) {
//     super(props) 

//     this.state = {
//       name: 'Home'
//     };
//   }
    
    // handleNameChange(path) {
    //   if(path === '/login') {
    //     this.setState({name: 'Logga in'});
    //   }
    //   if(path === '/register') {
    //     this.setState({name: 'Register'});
    //   }
    //   if(path === '/') {
    //     this.setState({name: 'Mina sidor'});
    //   }
    //   if(path=== '/mission') {
    //     this.setState({name: 'Uppgifter'});
    //   }
    //   if(path === '/transaction') {
    //     this.setState({name: 'Transaktioner'});
    //   }
    // }

  const Header = () => (
    <header className="Header"> 
      <h1>Home</h1>
      <div>         
        <a href="/">
          <Image  src={require('./img/piggybank.png')} alt="piggybank-logo" />
        </a>
      </div>        
    </header>       
)

export default Header
