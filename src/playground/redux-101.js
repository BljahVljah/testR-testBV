import {createStore} from 'redux';

// const add = ({a,b},c) => {
//     return a+b+c;
// }

// console.log(add({a:1,b:2},100));


const incCount = ({incrementBy=1} = {}) => ({
        type: 'INCREMENT',
        //incrementBy: typeof incrementBy ==='number' ? incrementBy : 1
        incrementBy
});

const decCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({setC = 1} = {}) => ({
    type: 'SET',
    setC
});

const resetCount = () => ({
    type: 'RESET'
});


//reducerji so pure functions
// nikol ne spreminji state al action

const countReducer = (state = {count: 0}, action) => {

    switch (action.type){
        case 'INCREMENT':
           
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.setC
            };
        default:
            return state;
    }

}

const store = createStore(countReducer());

// store.subscribe(() => {
//     console.log(store.getState());
// })





const unsubscr = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incCount({incrementBy:5}));
store.dispatch(incCount());

//subscribe returna nehat subscribe
//unsubscr();

//dispatch fura action
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5

// });

// store.dispatch({
//     type: 'INCREMENT'
// });

// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 5
// });
store.dispatch(decCount({decrementBy:10}));

// store.dispatch({
//     type: 'DECREMENT',
// });

// store.dispatch({
//     type: 'SET',
//     count:101
// });
store.dispatch(setCount({setC:99}));