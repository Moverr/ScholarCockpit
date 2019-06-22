import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import RadioButtonField from '../RadioButtonField';

  function handleClick(){
    return false;
}


describe('Testing Button FIeld', () => {
  it('should  render correctly', () => {    
    const props = {
        "title":"Option 1",
        "name":'Radion Buttion',
        "checked":false
        "handleClick":handleClick()
    }

      const wrapper = shallow(<RadioButtonField props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 