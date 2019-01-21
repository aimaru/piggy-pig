import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

import AddIncomeModal from "./AddIncomeModal";
import AddExpenditureModal from "./AddExpenditureModal";
import AddAssignmentModal from "./AddAssignmentModal";

import "./AddTransaction.scss";

// import {connect} from 'react-redux';
// import { setIncomeDate, setIncomePrice, setIncomeCategory } from "../actions/actions";

export default class AddTransaction extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      // show: true,
      value: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Col xs={9} className="AddTransaction">
        <div className="list-group">

          {/* Components */}
          <AddIncomeModal />
          <AddExpenditureModal />
          <AddAssignmentModal />

        </div>
      </Col>
    );
  }
}

AddTransaction.propType = {
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

