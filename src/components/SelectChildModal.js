import React, { Fragment} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './SelectChildModal.scss';
import Header from './Header';
import Aggregation from './Aggregation';


const SelectChildModal = () => (

 
      <Fragment>
        <Header />
        
        <main className="SelectChildModal">
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={12} sm={9} md={10} className="SelectChildPage">
      
      <Col xs={12} className="avatar">
      <Aggregation />
      <Aggregation />
      </Col>
      
    </Col>
    </Row>
</Grid>
</main>


  </Fragment>
);





export default SelectChildModal