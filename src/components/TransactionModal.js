import React from "react";
import { Col, Modal, ListGroup, ListGroupItem,
  FormGroup, ControlLabel, FormControl, 
  // InputGroup,
  // HelpBlock, 
  Button } from "react-bootstrap";
import PropTypes from "prop-types";


import Calendar from "./Calendar";
import FieldGroup from "./FieldGroup";
import "./TransactionModal.scss";
// import "./Modal.scss";
// import SelectButton from "./SelectButton";
// import "./SelectButton.scss";

// import {connect} from 'react-redux';


// Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio">
// Icons made by <a href="https://www.flaticon.com/authors/twitter">
// Icons made by <a href="https://www.freepik.com/">
// Icons made by <a href="https://www.flaticon.com/authors/itim2101">
import goal from "./img/goal.svg";
import savings from "./img/savings.svg";
import dollar from "./img/dollar.svg";

// import { setIncomeDate, setIncomePrice, setIncomeCategory } from "../actions/actions";



const SELECT_ICONS = [
  {
    id: 22,
    name: "Intjänade pengar",
    img: savings,
    alt: "piggy bank icon",
    buttonClassName: "savings-btn",
    imgClassName: "savings-icon"
  },
  {
    id: 23,
    name: "Använda pengar",
    img: dollar,
    alt: "dollar icon",
    buttonClassName: "dollar-btn",
    imgClassName: "dollar-icon"
  },
  {
    id: 24,
    name: "Färdiga uppgifter",
    img: goal,
    alt: "goal icon",
    buttonClassName: "goal-btn",
    imgClassName: "goal-icon"
  }
];




// const TransactionModal = ({store}) => {
//   const { date, price, category } = store.getState().income

  



export default class TransactionModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);

    this.state = {
      show: false,
      // show: true,
      value: ''
    };
  }



  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChangePrice(e) {
    this.setState(
      {
        value: e.target.value
      }
    );
    console.log('price', e.target.value)
  }


  // selectList({ id, label, help, ...props }) {
  //   return (
  //     <FormGroup controlId={id}>
  //       <ControlLabel>{label}</ControlLabel>
  //       <FormControl {...props} />
  //       {help && <HelpBlock>{help}</HelpBlock>}
  //     </FormGroup>
  //   );
  // }

  // onChangeDate() {


  // }




  render() {




    return (
      // <Grid>
        // <Row className="show-grid">
          <Col xs={9} className="TransactionModal">
            {/* <div> */}
            

              {/* <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.handleShow}
              >
                Launch demo modal
              </Button> */}

{/* selectbutton start */}
 {/* <div className="select-button"> */}
     <ListGroup>
       
      {/* <ButtonToolbar className="SelectButton"> */}
      {SELECT_ICONS.map(i => {
        return (
          <ListGroupItem key={i.id} className={i.buttonClassName} onClick={this.handleShow}> 
            {/* <Button type="button">*/}
             <img
              className={i.imgClassName}
              alt={i.alt}
              src={i.img}
            />
            <span>{i.name}</span>
            {/* </Button> */}
            </ListGroupItem> 






        );
      })}
    </ListGroup>

    {/* <Col /> */}
  {/* </div>  */}

{/* selectbutton end */}


{/* <SelectButton /> */}






              <Modal show={this.state.show} onHide={this.handleClose} className="Modal ">
                <Modal.Header closeButton>
                  <Modal.Title>Lägg till <span>intjänade pengar</span></Modal.Title>
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
      // onChange={this.handleChangePrice}
      // value={price}
      // onChange={e => store.dispatch(setIncomePrice(e.target.value))}
   />


{/* Choose category */}


<form>
<FormGroup controlId="formControlsSelect">
      <ControlLabel>Kategorier <span className="label-text">(välj kategori som du tjänat pengar)</span></ControlLabel>
      <FormControl componentClass="select" placeholder="Välj kategori, vilka pengar du tjänat ?">
      {/* <option value="sweets">Välj kategori, vilka pengar du sjänat?</option> */}
      <option value="sweets">Veckopengar</option>
        <option value="food">Bonus</option>
        <option value="hobby">Klarade uppgiften</option>
        <option value="other">Ovrig</option>
        {/* <option value="select">Välj kategorier</option> */}
        {/* <option value="sweets">Godis</option>
        <option value="food">Mat</option>
        <option value="hobby">Leksak/Hobby</option>
        <option value="book">Bok</option>
        <option value="stationary">Kontorsmateriel</option>
        <option value="stationary">Kläder</option>
        <option value="other">Ovrig</option> */}
      </FormControl>
    </FormGroup>

    

      <div className="add-category">
      <i className="fas fa-plus-circle"></i>  
        <p>Add en ny kategori</p>
      </div>

      {/* <FormGroup className="add-input">
    <InputGroup>
      <FormControl type="text" />
      <InputGroup.Addon><i className="fas fa-plus"></i></InputGroup.Addon>
    </InputGroup>
  </FormGroup> */}




    



    </form>


                 
    

                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleClose}>Avbryt</Button>
                  <Button onClick={this.handleClose}>Spara</Button>

                </Modal.Footer>
              </Modal>
            {/* </div> */}





          </Col>
          
        // </Row>
      // </Grid>
    );
  }
}

TransactionModal.propType = {
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

// export default Goal;
