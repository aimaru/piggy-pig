import React from "react";
import { FormGroup, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";
import "./FieldGroup.scss";



 const FieldGroup = ({ id, label, help, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

  

export default FieldGroup
