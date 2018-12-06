import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('exp form',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('exp form z dato',()=>{

    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('exp form z erorjem',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault:() => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('exp form set descrip na change',()=>{
    const value = 'nov desc';
    const wrapper = shallow(<ExpenseForm />);
    
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('exp form set note na change',()=>{
    const value = 'nov note';
    const wrapper = shallow(<ExpenseForm />);
    //ne rabiš .at()
    wrapper.find('textarea').simulate('change',{
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('exp form set amount valid',()=>{
    const value = '123';
    const wrapper = shallow(<ExpenseForm />);
    //ne rabiš .at()
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('exp form set amount INvalid',()=>{
    const value = 'aa123';

    const wrapper = shallow(<ExpenseForm />);
    //const oldValue = wrapper.find('input').at(1).value; //wraper.state('amount');//
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});

test('exp form valid submit',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });

    expect(wrapper.state('error')).toBe('');

    // onSubmitSpy('Bljah','LJ');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });
});

test('exp form onDateChanged',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
 //   expect(wrapper).toMatchSnapshot();
});

test('exp form onDateFocused',()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(focused);
 //   expect(wrapper).toMatchSnapshot();
});
// onDateChange = (createdAt) => {
//     if(createdAt){
//         this.setState(() => ({createdAt}));
//     }
// };

// onFocusChange = ({focused}) => {
//     this.setState(()=>({calendarFocused: focused}));
// };
