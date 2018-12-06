import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('stir404',()=>{

    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});