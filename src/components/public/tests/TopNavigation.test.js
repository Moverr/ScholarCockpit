import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TopNavigation from '../TopNavigation';





let wrapper = shallow(
   
        <TopNavigation />
    
);



describe('Testing   ', () => {


    it('should  render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should have a class banner', () => {
        expect(wrapper).toMatchSnapshot();
    });
})



