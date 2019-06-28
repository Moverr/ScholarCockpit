import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import VerifySchool from '../VerifySchool';
 
 


      
 let wrapper = shallow(<VerifySchool />);

   

describe('Testing Input FIeld', () => {
     

  it('should  render correctly', () => {       

      expect(wrapper).toMatchSnapshot();
  });

   
})



 