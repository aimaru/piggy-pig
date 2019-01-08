import React, { Fragment} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './SelectChildModal.scss';
import Header from './Header';
import ChildrenCard from './ChildrenCard';


const SelectChildModal = () => (

 
      <Fragment>
        <Header />
        
        <main className="SelectChildModal">
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={12} sm={9} md={10} className="SelectChildPage">
      
      <Col xs={12} className="avatar">
      <ChildrenCard />
      <ChildrenCard />
      </Col>
      
    </Col>
    </Row>
</Grid>
</main>


  </Fragment>
);





export default SelectChildModal