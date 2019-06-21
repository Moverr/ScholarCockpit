import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import LabelField from '../LabelField';
 

describe('Testing Button FIeld', () => {
  it('should  render correctly', () => {    
    const props = {
        "className":"labelClass",
        "title":'Label Title' 
    }

      const wrapper = shallow(<LabelField props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 