import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RightBar from '../RightBar';
import { Provider } from 'react-redux';






let wrapper = shallow( <RightBar />);



describe('Testing Rightbar ', () => {


  it('should  render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a class banner', () => {
    expect(wrapper).toMatchSnapshot();
  });
})



