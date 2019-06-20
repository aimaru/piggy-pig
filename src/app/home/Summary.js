import React from "react";
import { Row, Col, FormGroup, Card } from "react-bootstrap";
import { connect } from "react-redux";
import "./Summary.scss";

// Icons made by <a href="https://www.freepik.com/" title="Freepik">
// import rocket from './img/rocket.svg';
// Icons made by <a href="https://www.freepik.com/" title="Freepik">/" 	
import girl from '../common/img/girl.svg';


const initialState = {
  totalIncome: "",
};


// const Summary = (props) => (
class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
}

render() {
  // console.log('this.props.price', this.props.price);
  return (
    <div className="Summary">
      <Card body>
        <div> 

          <Col xs={12} sm={3} className="avatar">
            <form>
              <FormGroup
                className="form-control-file"
                controlId="formControlsFile"
                title="Addera avatar"
              >
              {/* <img src={rocket} alt="Rocket Icon" className="rocket-icon" /> */}
              <img src={girl} alt="Girl Icon" className="girl-icon" />
              <label>
                <input type="file" name="datafile" id="filesend" />
                <i className="fas fa-plus-circle fa-2x" />
              </label>
              </FormGroup>
            </form>
            <p className="name">Moco</p>
          </Col>
  
          <Col xs={12} sm={9} className="summary__wrapper">

            <Row>
            
            <Col xs={12} className="summary__amount">
              <p>Saldo</p>
              <p>0<span>kr</span></p>
            </Col>

            <Col xs={12} className="summary__income">
              <p>Total inkomst denna månad</p>
              <p>
                <span> {this.props.price} </span>kr</p>
            </Col>

            <Col xs={12} className="summary__expenditure">
              <p>Total utgifter denna månad</p>
              <p className="">- <span>0</span> kr</p>
            </Col>
            </Row>

        </Col>

    </div>

  </Card>

 </div>
  
);
  }
}




// Receive state as props
const mapStateToProps = state => {
  return {
    startDate: state.date,
    price: state.income.price,
    category: state.income.category
  };
};

export default connect(
  mapStateToProps
)(Summary);
