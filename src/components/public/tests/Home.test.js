import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Home from '../Home';





let wrapper = shallow(<Home />);



describe('Testing Home ', () => {


  it('should  render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a class banner', () => {
    expect(wrapper).toMatchSnapshot();
  });
})



