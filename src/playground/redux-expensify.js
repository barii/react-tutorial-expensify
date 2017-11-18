import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const addExpense = (
  { 
    description = '', 
    node = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description, 
    node, 
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
});

const editExpense = ( id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFielter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

const expensesReducerDefaultStore = [];


const expensesReducer = (state = expensesReducerDefaultStore, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, 
        action.expense
      ];
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    case 'REMOVE_EXPENSE': 
      return state.filter(({ id }) => id !== action.id)
    default:
      return state;
  }
};

const filtersReducerDefaultStore = {
  text: '',
  sortBy: 'date',
  startDate : undefined,
  endDate : undefined
};

const filtersReducer =  (state = filtersReducerDefaultStore, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof(endDate) !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof(endDate) !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(VisibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expense2 = store.dispatch(addExpense({ description: 'Cafee', amount: 10, createdAt: -1000 }));

// store.dispatch(removeExpense({id: expense1.expense.id}));
// store.dispatch(editExpense(expense2.expense.id, {amount:20}));

store.dispatch(setTextFielter('fee'));
// store.dispatch(setTextFielter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));

//store.dispatch(setEndDate(999));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());


const demoState = {
  expenses: [{
    id: 'sdfghadfg',
    description: 'gfasdfsa',
    abount: '95000'
  }],
  filter: {
    text: 'rent',
    orderBy: 'amount',
    startDate : undefined,
    endDate : undefined
  }
}

