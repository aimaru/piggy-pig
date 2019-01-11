// import React, { Component } from 'react';
import { combineReducers } from "redux";

const initialState = {
  user: [
    {
      _id: "",
      name: "",
      email: "",
      password: "",
      avatar: "",
      role: "",
      belong_to: [
        {
          name: "",
          email: ""
        }
      ],
      goal: ""
    }
  ],
  transaction: [
    {
      _id: "",
      user: "",
      create_at: "",
      mission: ""
    }
  ],
  mission: [
    {
      _id: "",
      name: "",
      price: "",
      type: "",
      catetory: ""
    }
  ]
};

const rootReducer = combineReducers({
  user: userReducer,
  transaction: transactionReducer,
  mission: missionReducer
});


console.log('initialState: ', initialState);
// console.log('rootReducer: ', rootReducer);
// console.log('userReducer: ', userReducer);





export default rootReducer;
