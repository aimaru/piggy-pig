// import React, { Component } from 'react';
import { combineReducers } from "redux";
// export default rootReducer;

import {
  SET_INCOME_DATE,
  SET_INCOME_PRICE,
  SET_INCOME_CATEGORY,
  INITIALIZE_INCOME
} from "../actions/actions";

// import { ADD_GOAL } from '../actions'

const initialState = {
  // user: {
  // id: "",
  // name: "",
  // email: "",
  // password: "",
  // avatar: "",
  // role: "",
  // belongTo: [],
  //   goal: ""
  // },
  // transaction: {
  //   isFetching: false,
  //   incomeArray: [],
  //   // expenditureArray: []
  // },
  income: {
    // id: "",
    date: "",
    price: "",
    category: ""
  }
  // expenditure: [
  //   {
  //     id: "",
  //     assignmentName: "",
  //     type: "",
  //     price: "",
  //     date: ""
  //   }
  // ],
  // AggregationThisMonth:
  //   {
  //     income: "",
  //     expenditure: "",
  //     Aggregation: ""
  //   }
  //   }
  // ]
  // },

  // app: {
  //   isFetching: false
  // }
  // assignment: [
  //   {
  //     id: "",
  //     text: "",
  //     price: "",
  //     catetory: "",
  //     approved: ""
  //   }
  // ]
};

// userReducer
// const userReducer = (state = initialState.user, action) => {
// switch (action.type) {
//   case 'ADD_GOAL_THIS_MONTH':
//   return [
//     ...state,
//     {
//       goalThisMonth: action.goalThisMonth
//     }
//   ]
//   default:
//   // return console.log('new state', state);
//   return state;
// };

// }
// console.log("!!!!!userReducer", userReducer);

const incomeReducer = (state = initialState.income, action) => {
  switch (action.type) {
    case SET_INCOME_DATE:
      return {
        ...state,
        date: action.date
      };
    case SET_INCOME_PRICE:
      return {
        ...state,
        price: action.price
      };
    case SET_INCOME_CATEGORY:
      return {
        ...state,
        category: action.category
      };
    case INITIALIZE_INCOME:
      return initialState.income;
    default:
      return state;
  }
};

// const transactionReducer = (state = initialState.transaction, action) => {
//   switch (action.type) {
//     // case SET_DEPOSIT_DATE:
//     //   return {
//     //     ...state,
//     //     depositDate: state.depositDatestate
//     //   };

//     default:
//       return state;
//   }
// };
// console.log("transactionReducer", transactionReducer);

// const appReducer = (state = initialState.app, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
// console.log("appReducer", appReducer);

// console.log('action', action);
// console.log('type', type)
// console.log('user', user);
// console.log('state', state);

// switch(type) {
//   case SET_USER:
//     return {
//       ...state,
//     id: undefined || user.id,
//     name: user.name,
//     email: user.email,
//     password: user.password,
//     avatar: user.avatar,
//     role: user.role,
//     belongTo: user.belongTo,
//     goal: user.goal,
//     lastMonth: user.lastMonth,
//     thisMonth: user.thisMonth
//     };

//     }

const rootReducer = combineReducers({
  // user: userReducer,
  income: incomeReducer
  // expenditure: expenditureReducer,
  // transaction: transactionReducer,
  // app: appReducer
  // assignment: assignmentReducer
});

// console.log("initialState: ", initialState);
// console.log("rootReducer: ", rootReducer);
// console.log('userReducer: ', userReducer);

export default rootReducer;
