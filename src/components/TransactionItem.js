import React, { Fragment } from "react";
import { ButtonToolbar, Button, Image } from "react-bootstrap";
import "./TransactionItem.scss";

// Icons made by <a href="https://www.flaticon.com/authors/smashicons" 
// import edit from "./img/edit.svg";


const TEMPORARY_LIST_ITEM = [
  {
    id: 31,
    date: "2019-01-01",
    item: "inkomst",
    // {
    //   income: true,
    //   expenditure: false
    // },
    operator: "+",
    //  {
    //   puls: true,
    //   minus: false
    // },
    price: 250,
    purpose: "Veckopengar"
    // category: "Veckopengar"
  },
  {
    id: 32,
    date: "2019-01-04",
    item: "utgift",
    // {
    //   income: true,
    //   expenditure: false
    // },
    operator: "-",
    //  {
    //   puls: true,
    //   minus: false
    // },
    price: 89,
    purpose: "Köpte ett spel"
    // category: "Leksak/hobby"
  },
  {
    id: 33,
    date: "2019-01-05",
    item: "inkomst",
    // {
    //   income: true,
    //   expenditure: false
    // },
    operator: "+",
    //  {
    //   puls: true,
    //   minus: false
    // },
    price: 10,
    purpose: "Läste en bok"
    // category: "Uppgift"
  },
  {
    id: 34,
    date: "2019-01-08",
    item: "inkomst",
    // {
    //   income: true,
    //   expenditure: false
    // },
    operator: "+",
    //  {
    //   puls: true,
    //   minus: false
    // },
    price: 89,
    purpose: "Köpte godis"
    // category: "Mat"
  }
];



const TransactionItem = () => (
  <Fragment>
    {TEMPORARY_LIST_ITEM.map(i => {
      return (
         
            <div className="TransactionItem" key={i.id}>
              <div className="list-item-holder">
                <p>{i.date}</p>
                <p>{i.item}</p>
              </div>
              <p>{i.operator}{i.price}</p>
              <p>{i.purpose}</p>
              <ButtonToolbar>
                <Button>
                <Image alt="Edit Pensrc" src="./img/edit.svg" rounded />
                </Button>
              </ButtonToolbar>
            </div>
         
      
      );
    })}
  </Fragment>
);

export default TransactionItem;
