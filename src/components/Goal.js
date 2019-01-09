import React from "react";
import {
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button
} from "react-bootstrap";
import "./Goal.scss";

const Goal = () => (
  <Col xsOffset={1} xs={10} className="Goal">
  
    <FormGroup controlId="formControlsText">
      <ControlLabel>Hur mycket vill du intjänade pengar?</ControlLabel>
      <div className="input-holder">
      <FormControl
        id="formControlsText"
        type="text"
        label="Text"
        placeholder="Skriv ditt mål"
      />
      <p>kr</p>
      <ButtonToolbar>
        <Button>Spara</Button>
      </ButtonToolbar>
      </div>
      <p>
        * Förra månaden intjänade du <span className="last-month-result">89</span>{" "}
        <span>kr</span>.
      </p>
    </FormGroup>
    
    <Col xsOffset={1} />
  </Col>
);

export default Goal;
