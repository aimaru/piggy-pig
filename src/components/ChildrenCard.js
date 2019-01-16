import React from "react";
import { Col, FormGroup } from "react-bootstrap";
import "./ChildrenCard.scss";

// Icons made by <a href="https://www.freepik.com/" title="Freepik">
// import rocket from './img/rocket.svg';
// Icons made by <a href="https://www.freepik.com/" title="Freepik">/" 	
import girl from './img/girl.svg';


const ChildrenCard = () => (
  // <Col xsOffset={2} xs={8} className="ChildrenCard">
  <Col xs={9} className="ChildrenCard">
    <Col xs={3} className="avatar">
      <form>
        <FormGroup
          className="form-control-file"
          controlId="formControlsFile"
          title="Addera avatar"
          
        >
        {/* ロケット写真は後で、入れ替えるできるようにする */}
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

    <Col xs={9} className="amount-holder">
      <Col xs={12} className="amount">
        <p>Saldo</p>
        <p>789 kr</p>
      </Col>
      <Col xs={12} className="income">
        <p>Totala inkomst denna månad</p>
        <p>+456 kr</p>
      </Col>
      <Col xs={12} className="expenditure">
        <p>Totala utgifter denna månad</p>
        <p className="">-123 kr</p>
      </Col>
    </Col>

    {/* <Col xsOffset={2} /> */}
  </Col>
);

export default ChildrenCard;
