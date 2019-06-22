import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import InputField from '../InputField';
 

describe('Testing Input FIeld', () => {
  it('should  render correctly', () => {    
    const props = {
        "className":"inputfield",
        "value":'Label Title',
        "type":"input" 
    }

      const wrapper = shallow(<InputField props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 