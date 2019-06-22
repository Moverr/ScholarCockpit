import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
 
import ButtonField from '../ButtonField';

  function handleClick(){
    return false;
}


const wrapper = null;
beforeAll(()=>{

const props = {
        title:"Button Title",
        name:'Button Name',
        handleClick:handleClick()
    };
    wrapper = shallow(<ButtonField props />); 
});

describe('Testing Button FIeld', () => {
  it('should  render correctly', () => {    
      expect(wrapper).toMatchSnapshot();  });
})



 