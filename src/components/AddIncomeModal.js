import React from "react";
import {
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import FieldGroup from "./FieldGroup";
import "./AddIncomeModal.scss";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

// Calendar
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Icons made by <a href="https://www.freepik.com/">
import savings from "./img/savings.svg";



const initialState = {
  startDate: new Date(),
  price: '',
  category: 'pocket-money',
  // category: '',
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
 

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }
 
  handleDateChange(date) {
    this.setState({
      startDate: date
    });
    this.props.setIncomeDate(date);
      console.log('date: ', date);
    console.log('this.props.setIncomeDate(date)', this.props.setIncomeDate(date))
  }

  handlePriceChange(e) {
    const price = e.target.value;
    this.setState({
      price: price
    });
    this.props.setIncomePrice(price);
    console.log("price", price);
  }

  handleCategoryChange(e) {
    const category = e.target.value;
    this.setState({
    category: category
    });
    this.props.setIncomeCategory(category);
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
            />

            {/* Choose category */}
            <form>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>
                  Kategorier
                  <span className="label-text">
                    (välj kategori som du tjänat pengar)
                  </span>
                </ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="Välj kategori, vilka pengar du tjänat ?"
                  // selected={this.state.category}
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
    setIncomeDate: date => dispatch(actions.setIncomeDate(date)),
    setIncomePrice: price => dispatch(actions.setIncomePrice(price)),
    setIncomeCategory: category => dispatch(actions.setIncomeCategory(category))
  }
}






export default connect(
  null,
  mapDispatchToProps
  )(AddIncomeModal);
