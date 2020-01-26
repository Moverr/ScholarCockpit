import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LoginSchool from '../LoginSchool';





let wrapper = shallow(<LoginSchool />);



describe('Testing Login ', () => {


  it('should  render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a class banner', () => {
    expect(wrapper).toMatchSnapshot();
  });
})



