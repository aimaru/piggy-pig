import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './SelectChildModal.scss';
import Header from '../../../components/Header';
import Summary from './Summary';


const SelectChildModal = () => (

 
      <Fragment>
        <Header />
        
        <main className="SelectChildModal">
          <Grid fluid>
            <Row>
              <Col xs={12} sm={9} md={10} className="SelectChildPage">
      
      <Col xs={12} className="avatar">
      <Summary />
      </Col>
      
    </Col>
    </Row>
</Grid>
</main>


  </Fragment>
);





export default SelectChildModal