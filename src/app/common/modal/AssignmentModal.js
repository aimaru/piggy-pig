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

// import Calendar from "./Calendar";
import FieldGroup from "../FieldGroup";
import "./AssignmentModal.scss";

// Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio">
// Icons made by <a href="https://www.flaticon.com/authors/twitter">
// Icons made by <a href="https://www.freepik.com/">
// Icons made by <a href="https://www.flaticon.com/authors/itim2101">
import goal from "../img/goal.svg";
// import savings from "./img/savings.svg";
// import dollar from "./img/dollar.svg";

// import { setIncomeDate, setIncomePrice, setIncomeCategory } from "../actions/actions";

class AssignmentModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);

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

  handlePriceChange(e) {
    this.setState({
      value: e.target.value
    });
    console.log("price", e.target.value);
  }

  render() {
    return (
      <div className="AssignmentModal">
        <div className="goal-btn list-group-item " onClick={this.handleShow}>
          <img className="goal-icon" alt="goal icon" src={goal} />
          <span>Färdiga uppgifter</span>
        </div>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Lägg till <span>Färdiga uppgifter</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {/* Calendar component */}
            {/* <Calendar /> */}

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


AssignmentModal.propType = {
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default AssignmentModal;
