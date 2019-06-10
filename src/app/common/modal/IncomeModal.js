import React from "react";
import {
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
// import axios from "axios";

import FieldGroup from "../FieldGroup";
import "./IncomeModal.scss";
// Calendar
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Icons made by <a href="https://www.freepik.com/">
import savings from "../img/savings.svg";

const initialState = {
  date: new Date(),
  price: "",
  category: "Veckopengar",
  // category: '',
  show: true
};
console.log("initialState:", initialState);

class IncomeModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleIncomeSubmit = this.handleIncomeSubmit.bind(this);

    this.state = initialState;
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  // handleDateChange(date) {
  //   this.setState({
  //     date: date
  //   });
  //   this.props.setIncomeDate(date);
  //   console.log("date: ", date);
  // }

  handleDateChange(date) {
    // const date = e.target.value;
    this.setState({
      date: date
    });
    this.props.setIncomeDate(date); 
    console.log("date", date);
  }

 
  handlePriceChange(e) {
    const price = e.target.value;
    this.setState({
      price: price
    });
    this.props.setIncomePrice(price);
    console.log("price2222222222", price);
    console.log('this.props.setIncomePrice(price);', this.props.setIncomePrice(price));
    
  }

  handleCategoryChange(e) {
    const category = e.target.value;
    this.setState({
      category: category
    });
    this.props.setIncomeCategory(category);
    // console.log('this.props.setIncomeCategory(category)', this.props.setIncomeCategory(category))
    console.log('category', category);
  }

  handleIncomeSubmit = e => {
    e.preventDefault();

    // const { date, price, category } = this.state;
    // console.log('this.state', this.state)

const { date, price, category } = this.state;
// const { setIncomeDate } = this.props;

console.log('date: ', date)
console.log('price: ', price)
console.log('category: ', category)



    // axios.post('/api/incomes', {


      // date,
      // price,
      // category
    // })
    // .then(res => {
    //  console.log('!!!res: ', res)
      // submit語はフォームを初期化
      // ここで、initializIncomeを初期化
      // initializeIncome()...
      
      // ‼!!!!!!!!!!!!! ここでエラー!!!!!!!!!
      // setIncomeDate(res.data);


  //   })
  //   .catch(err => {
  //     console.error(new Error(err))
  //   })

  this.handleClose()
  }

  render() {
    return (
      <div className="IncomeModal">
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
                selected={this.state.date}
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
                  <option value="Veckopengar">Veckopengar</option>
                  <option value="Bonus">Bonus</option>
                  <option value="Klarade uppgiften">Klarade uppgiften</option>
                  <option value="Ovrig">Ovrig</option>
                </FormControl>
              </FormGroup>

              {/* test start */}
              {/* <div>
      <p>{this.state.category}</p>
{/* test end */}
              {/*   </div> */}

              <div className="add-category">
                <i className="fas fa-plus-circle" />
                <p>Add en ny kategori</p>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Avbryt</Button>
            <Button type="submit" onClick={this.handleIncomeSubmit}>
              Spara
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

IncomeModal.propType = {
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

// State props コンポネントのpropsに渡す
const mapStateToProps = state => {
  return {
    date: state.date,
    price: state.price,
    category: state.income.category
  };
};

// Dispatch props コンポネントのpropsに渡す
const mapDispatchToProps = dispatch => {
  return {
    setIncomeDate: date => dispatch(actions.setIncomeDate(date)),
    setIncomePrice: price => dispatch(actions.setIncomePrice(price)),
    setIncomeCategory: category => dispatch(actions.setIncomeCategory(category))
  };
};

export default connect(
  // null,
  mapStateToProps,
  mapDispatchToProps
)(IncomeModal);
