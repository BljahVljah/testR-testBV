import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('fitr difolt',()=>{
    const state = filtersReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('naj bi sort by amount',()=>{
    const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('naj bi sort by date',()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action =  {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});

//preveri
// test('naj bi text filter',()=>{
//     const action = {type: 'SET_TEXT_FILTER',text:'test text'};
//     const state = filtersReducer(undefined,action);
//     expect(state.text).toBe(action.text);
// });
test('naj bi text filter',()=>{
    const text = 'test text';
    const action = {type: 'SET_TEXT_FILTER',text};
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe(text);
});

test('naj bi startDate filter',()=>{
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate    };
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toBe(startDate);
});

test('naj bi endDate v filter',()=>{
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined,action);
    expect(state.endDate).toBe(endDate);
});
