// Actions

// Income actions
export const SET_INCOME_DATE = "SET_INCOME_DATE";
export const SET_INCOME_PRICE = "SET_INCOME_PRICE";
export const SET_INCOME_CATEGORY = "SET_INCOME_CATEGORY";
export const INITIALIZE_INCOME = "INITIALIZE_INCOME";

// Action creaters
export const setIncomeDate = date => ({
  type: SET_INCOME_DATE,
  date
});

export const setIncomePrice = price => ({
  type: SET_INCOME_PRICE,
  price
});

export const setIncomeCategory = category => ({
  type: SET_INCOME_CATEGORY,
  category
});

export const initializeIncome = () => ({
  type: INITIALIZE_INCOME
});

