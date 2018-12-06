//expences reducer

const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
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

