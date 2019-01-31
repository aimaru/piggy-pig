import { combineReducers } from "redux";
import {
  SET_INCOME_DATE,
  SET_INCOME_PRICE,
  SET_INCOME_CATEGORY,
  INITIALIZE_INCOME
} from "../actions/actions";


const initialState = {

  income: {
    date: "",
    price: 0,
    category: ""
  },
  incomeItems: {
    isFetching: false,
    incomeList: []
  }
}

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

const incomeItemsReducer = (state = initialState.incomeItems, action) => {
  switch (action.type) {
    default: 
      return state;
  }  
}

const rootReducer = combineReducers({
  income: incomeReducer,
  incomeItems: incomeItemsReducer,
});

export default rootReducer;
