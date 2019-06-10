import React from "react";
import {
  Col,
  FormGroup,
  FormControl,
  ButtonToolbar,
  Button
} from "react-bootstrap";
import PropTypes from "prop-types";

import "./Goal.scss";

// import {connect} from 'react-redux';

const initialState = {
  goal: ''
};


export default class Goal extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    console.log('state', this.state)
  }

  handleChange = e => {
    this.setState ({
      goal: e.target.value
    });
    console.log('value', e.target.value)
  };

  // 動作確認するために、onClick にするが、データベースの準備ができたら、onsubmitにする
  handleSubmit  = e => {
      e.preventDefault();
      const goal = this.state;
      console.log('new goal: ', goal)
      // this.props.requestData();  // データベースへ送る関数?
  }


  // !!!!!!!!! Create a function here !!!!!!!!!
  // 目標金額の値をデータベースから読み込んで、表示させる


  render() {
    return (

  <Col xs={9} className="Goal">
    <Col xs={9} className="">
      <FormGroup controlId="formControlsText">
        {/* <ControlLabel>Hur mycket vill du intjänade pengar den denna månad?</ControlLabel> */}
        <p>Hur mycket vill du intjänade pengar den denna månad?</p>
        <div className="input-holder">
          <FormControl id="formControlsText" type="text" label="Text" 
            onChange={e => this.handleChange(e)} />
          <p>kr</p>
          <ButtonToolbar>
            <Button type="submit"
            // 動作確認するために、onClick にするが、データベースの準備ができたら、onsubmitにする
            // onSubmit={e => this.handleSubmit(e)}
            onClick={e => this.handleSubmit(e)}
            >
            Spara</Button>
          </ButtonToolbar>
        </div>
        {/* <p>
        * Förra månaden intjänade du <span className="last-month-result">89</span>
        <span>kr</span>.
      </p> */}
      </FormGroup>

      {/* It appears when the save button is pressed */}
      {/* <p className="show-goal">
        Spara{" "}
        <strong>
          <span>100</span> kr
        </strong>{" "}
        i den här månaden!{" "}
      </p>
 */}

    </Col>

    {/* <Col xs={3} className="stamp">
      <div className="circle"> */}
      {/* Add icon here  */}
      {/* </div>
    </Col> */}
  </Col>
);

  }
 };

Goal.propType = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

// export default Goal;



