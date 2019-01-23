import React from "react";
import {
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

// import Calendar from "./Calendar";
import FieldGroup from "./FieldGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./AddIncomeModal.scss";



// Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio">
// Icons made by <a href="https://www.flaticon.com/authors/twitter">
// Icons made by <a href="https://www.freepik.com/">
// Icons made by <a href="https://www.flaticon.com/authors/itim2101">
import savings from "./img/savings.svg";

// import { setIncomeDate, setIncomePrice, setIncomeCategory } from "../actions/actions";

const initialState = {
  startDate: new Date(),
  price: '',
  category: 'pocket-money',

  show: true
};
console.log('initialState:', initialState)


class AddIncomeModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    // this.handleIncomeSubmit = this.handleIncomeSubmit.bind(this);

    this.state = initialState;
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
 
  handleDateChange(date) {
    this.setState({
      startDate: date
    });
    this.props.setIncomeDate(date);
    console.log('default dag (before):', date);
    console.log('vilken dag idag? (after):', date);
  }

  handlePriceChange(e) {
    this.setState({
      price: e.target.value
    });
    console.log("price", e.target.value);
  }

  handleCategoryChange(e) {
    this.setState({
      category: e.target.value
    });
    console.log("category", e.target.value);
  }

  // handleIncomeSubmit(e) {
  //   e.preventDefault();
  //   const {
  //     date, price, category  
  //   } = this.state;
  //   // const { user } = this.props;
  // }




  render() {
    return (
      <div className="AddIncomeModal">
        <div className="savings-btn list-group-item" onClick={this.handleShow}>
          <img className="savings-icon" alt="piggy bank icon" src={savings} />
          <span>Intjänade penga </span>
        </div>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Lägg till <span>intjänade pengar</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {/* Calendar component */}
            {/* <Calendar /> */}

            <div className="Calendar">
        <h5>Datum</h5>
        <DatePicker
          // className="Calendar"
          selected={this.state.startDate}
          onChange={this.handleDateChange}
        />
      </div>



            {/* Input price */}
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Pris"
              placeholder="Hur mycket pengar har du fått (skriv bara siffror) ?"
              onChange={this.handlePriceChange}
              // value={price}
              // onChange={e => store.dispatch(setIncomePrice(e.target.value))}
            />

            {/* Choose category */}
            <form>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>
                  Kategorier{" "}
                  <span className="label-text">
                    (välj kategori som du tjänat pengar)
                  </span>
                </ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="Välj kategori, vilka pengar du tjänat ?"
                  onChange={this.handleCategoryChange}
                >
                  <option value="pocket-money">Veckopengar</option>
                  <option value="bonus">Bonus</option>
                  <option value="finish-task">Klarade uppgiften</option>
                  <option value="other">Ovrig</option>
                </FormControl>
              </FormGroup>

              <div className="add-category">
                <i className="fas fa-plus-circle" />
                <p>Add en ny kategori</p>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Avbryt</Button>
            <Button type="submit" onClick={this.handleIncomeSubmit}>Spara</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

AddIncomeModal.propType = {
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};


// Dispatch props データをセーブ
const mapDispatchToProps = dispatch =>{
  return{
    setIncomeDate: date => dispatch(actions.setIncomeDate(date))
  }
}




export default connect(
  null,
  mapDispatchToProps
  )(AddIncomeModal);
