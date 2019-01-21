import React from "react";
import {
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import PropTypes from "prop-types";

// import { connect } from 'react-redux';

import Calendar from "./Calendar";
import FieldGroup from "./FieldGroup";
import "./AddIncomeModal.scss";

// import {connect} from 'react-redux';

// Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio">
// Icons made by <a href="https://www.flaticon.com/authors/twitter">
// Icons made by <a href="https://www.freepik.com/">
// Icons made by <a href="https://www.flaticon.com/authors/itim2101">
import savings from "./img/savings.svg";

// import { setIncomeDate, setIncomePrice, setIncomeCategory } from "../actions/actions";

class AddIncomeModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);

    this.state = {
      show: false
      // show: true,
      // value: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChangePrice(e) {
    this.setState({
      value: e.target.value
    });
    console.log("price", e.target.value);
  }

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
            <Calendar />

            {/* Input price */}
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Pris"
              placeholder="Hur mycket pengar har du fått (skriv bara siffror) ?"
              onChange={this.handleChangePrice}
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
                >
                  <option value="sweets">Veckopengar</option>
                  <option value="food">Bonus</option>
                  <option value="hobby">Klarade uppgiften</option>
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
            <Button onClick={this.handleClose}>Spara</Button>
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

export default AddIncomeModal;
