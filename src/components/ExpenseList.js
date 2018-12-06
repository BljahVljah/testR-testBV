import React from 'react';
import {connect} from 'react-redux';


import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses.js';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0? (
                <p>Ni expensov</p>
            ):(
                props.expenses.map((expense) => {
                    //console.log({...expense})
                    return <ExpenseListItem key={expense.id} {...expense}/>
                })
            )
        }
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };    
};


export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses:state.expenses
//     };    
// })(ExpenseList);

// export default ConnectedExpenseList;