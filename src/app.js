import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/lib/css/_datepicker.css';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore';
import {addExpense,editExpense, removeExpense} from './actions/expenses';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import {Provider} from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({description:'Water bill',amount: 4500}));
store.dispatch(addExpense({description:'Gas bill',createdAt:1000}));
store.dispatch(addExpense({description:'Rent',amount: 109500}));

//store.dispatch(setTextFilter('gas'));


// //čez 3 sekunde ga obrn
// setTimeout(() => {
//    store.dispatch(setTextFilter('bill')); 
// }, 3000);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


//console.log(store.getState());

ReactDOM.render(jsx,document.getElementById('app'));
