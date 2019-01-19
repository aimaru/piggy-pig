// Actions

export const SET_INCOME_DATE = 'SET_INCOME_DATE';
export const SET_INCOME_PRICE = 'SET_INCOME_PRICE';
export const SET_INCOME_CATEGORY = 'SET_INCOME_CATEGORY';
export const INITIALIZE_INCOME = 'INITIALIZE_INCOME';


// Action creaters
export const setIncomeDate = date => ({
  type: SET_INCOME_DATE,
  date,
}

);


export const setIncomePrice = price => ({
  type: SET_INCOME_PRICE,
  price,
});

console.log('setIncomePrice i Action',setIncomePrice);


export const setIncomeCategory = category => ({
  type: SET_INCOME_CATEGORY,
  category,
});

console.log('setIncomeCategory i Action',setIncomeCategory);



export const initializeIncome = () => ({
  type: INITIALIZE_INCOME,
  // income
})

console.log('initializeIncome i Action', initializeIncome);

