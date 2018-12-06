import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    }={}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate = (startDate) => ({  // ne rabm = undefined
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});



//expences reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch  (action.type){
        case 'ADD_EXPENSE':
            return[
                ...state,
                action.expense
            ]
            //ali return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !==action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense, //ga sprednem
                        ...action.updates // sprednem in overrajdam  expense
                    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }

};

//filters reducer
const filtersReducerDefaultState = {
    text:'',
    sortBy:'date', //ali date
    startDate:undefined,
    endDate:undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch  (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }

};


// get vizibl exp
const getVisibleExpenses = (expenses, {text, sortBy,startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1; // če je manjši, bo najprej drugi (1) čene prvi (-1)
        }
    });
};

// store creation
//const store = createStore(expensesReducer);
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const exp1 = store.dispatch(addExpense({description:'rent',amount: 52, createdAt:1000}));
const exp2 = store.dispatch(addExpense({description:'kufe',amount: 200,createdAt:-1000}));


// store.dispatch(removeExpense({id: exp1.expense.id}));
// //console.log(exp1);

// store.dispatch(editExpense(exp2.expense.id,{amount:500 }));

//store.dispatch(setTextFilter('fe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

// const demoState = {
//     expenses: [{
//         id:'aaa',
//         description: 'rent jan',
//         note:'je kar visok',
//         amount: 52000,
//         createdAt:0
//     }],
//     filters:{
//         text:'rent',
//         sortBy:'amount', //ali date
//         startDate:undefined,
//         endDate:undefined
//     }
// };



// //spreding obj
// const user = {
//     name: 'Bljh',
//     age: 42
// };

// console.log({
//     krneki_ali_obstojece: 'asd',
//     ...user,
//     location: 'LJ',
//     age: 99  //po ... ga spremeni, pred ga ne
// })

//arrayi
 //razlika med push in concat je da push doda v array, concat pa pokaže arraj plus dodano
        //const names = ['blj', 'vlj']
        //['alj', ...names, 'zlj']