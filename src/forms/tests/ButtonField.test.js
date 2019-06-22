import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import ButtonField from '../ButtonField';

  function handleClick(){
    return false;
}


describe('Testing Button FIeld', () => {
  it('should  render correctly', () => {    
    const props = {
        title:"Button Title",
        name:'Button Name',
        handleClick:handleClick()
    }

      const wrapper = shallow(<ButtonField props />);
      expect(wrapper).toMatchSnapshot();
  });
})



 