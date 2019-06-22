import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import LabelField from '../LabelField';
 

describe('Testing Label FIeld', () => {
  it('should  render correctly', () => {    
    const props = {
        className:"labelClass",
        title:'Label Title' ,
         name:"name" 
    }

      const wrapper = shallow(<LabelField props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 