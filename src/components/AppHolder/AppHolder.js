import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
// import { Grid, Row, Fragment, Typing, Switch } from 'react-bootstrap';
// import PropTypes from 'prop-types';

import Header from './Header';
import SideMenu from './SideMenu';


export default class AppHolder extends React.Component {
  
  render() {
    return (
      <Grid>
        <Row className="show-grid AppHolder">
          <Col xs={12} md={3}>

          {/* Components */}
          <Header />
          <SideMenu />
          
          {/* </Col>
          <Col xs={12} md={9}> */}
          </Col>
          
   












      
        </Row>
      </Grid>  

      
    );
  }

}
