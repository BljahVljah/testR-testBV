import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


test('remuv exp',() => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });

});

test('edit exp',() => {
    const action = editExpense('123abc',{note:'neki'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note:'neki'
        }
    });
});

test('add exp',() => {
    const expenseData = {
        description: 'ABC', 
        note: 'Nota', 
        amount: 500, 
        createdAt: 1500000
    }
    const action = addExpense(expenseData);
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('add exp brez val',() => {
    const action = addExpense();
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description:'', 
            note: '', 
            amount:0 , 
            createdAt: 0
        }
    });
});