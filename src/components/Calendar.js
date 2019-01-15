import React from "react";
// import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import DatePicker from "react-datepicker";

// import "./Calendar.scss";
import "react-datepicker/dist/react-datepicker.css";

// import PropTypes from "prop-types";

// import "./TransactionModal.scss";







export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      <DatePicker
        className="Calendar"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />


      

    );
  }
}







// const Calendar = () => (

  // <FormGroup controlId="formControlsSelect">
  //     <ControlLabel>Select</ControlLabel>
  //     <FormControl componentClass="select" placeholder="select">
  //       <option value="select">select</option>
  //       <option value="other">...</option>
  //     </FormControl>
  //   </FormGroup>





// );


// export default Calendar;