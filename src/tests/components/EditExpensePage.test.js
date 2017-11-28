import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            expense={expenses[2]} 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history} 
        />
    );    
});

test('should edit render expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
}); 

test ('should handle onsubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});


test ('should handle onclick', () => {
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });    
});

