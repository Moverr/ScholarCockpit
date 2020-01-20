import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Banner from '../Banner';





let wrapper = shallow(<Banner />);



describe('Testing Input FIeld', () => {


  it('should  render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a class banner', () => {
    expect(wrapper).toMatchSnapshot();
  });
})



