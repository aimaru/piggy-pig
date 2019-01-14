import React from 'react';
import { Grid, Row, Navbar, Thumbnail } from 'react-bootstrap';

import './Header.scss';
// import pig-logo from '../../img/piggybank.png';
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
   
  // render() {
  //   return (
      <header className="Header"> 
        <Grid fluid>
          <Row className="show-grid">

            {/* <Col xs={12}> */}

              <Navbar>
              <h1>Home</h1>
                <Navbar.Header >
                {/* <h1>Home</h1> */}
                  <Navbar.Brand>

                    
                    {/* <a href="/">Piggy pig</a>
                    <img  src={require('/.piggybank.png')} alt="pig-logo" />
                  Piggy Pig  */}
                        {/* <Image src={require('./piggybank.png')} href="/" rounded /> */}
                    <Thumbnail href="/" alt="pig-logo" src={require('../components/img/piggybank.png')} />
                    
                    
                  </Navbar.Brand>
                
                </Navbar.Header>
                {/* <Nav className="text-center">
                  <NavItem eventKey={1} href="#">
                    Home
                  </NavItem>
                </Nav> */}
              </Navbar>   

            {/* </Col> */}
          </Row>
        </Grid>
    </header>       
  //   );
  // }

// }
)

export default Header
