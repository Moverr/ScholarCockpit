import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import RightBar from '../RightBar';
import { Provider } from 'react-redux';
import store from '../../../store/Store';






let wrapper = shallow( <RightBar  store={store} />);



describe('Testing Rightbar ', () => {


  it('should  render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a class banner', () => {
    expect(wrapper).toMatchSnapshot();
  });
})



