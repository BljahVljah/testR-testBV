import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('test exp list',()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);


    expect(wrapper).toMatchSnapshot();
});

test('test exp list prazn',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});