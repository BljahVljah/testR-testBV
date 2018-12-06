import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';



test('defolt exp reduc',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);  
});

test('rem exp reduc valid id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);  
});

test('rem exp reduc invalid id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: 4
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);  
});

test('add exp reduc',()=>{
    const expense = {
        id: '4',
        description:'test',
        note:'',
        amount: 195,
        createdAt: 0
    }
    const action = {
        type:'ADD_EXPENSE',
        expense  
    };
    const state = expensesReducer(expenses,action);
//    expect(state).toEqual([expenses[0],expenses[1],expenses[2],expenses[3]]);
    expect(state).toEqual([...expenses,expense]);  
});


test('edit exp reduc',()=>{
    const amount = 122000;
    
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(amount);  
});

test('edit exp reduc ne gut id',()=>{
    const amount = 122000;
    
    const action = {
        type:'EDIT_EXPENSE',
        id: '7',
        updates:{
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);  
});
