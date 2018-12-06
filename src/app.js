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


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


//console.log(store.getState());

ReactDOM.render(jsx,document.getElementById('app'));
