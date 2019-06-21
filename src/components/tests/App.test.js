import React from 'react';
import ReactDOM from 'react-dom';

import shallow from 'enzyme';
import App from '../App.jsx';

 
 const appComponent =()=>{
      <App/>
    };
    



describe('App Component', () => {
  
  

  it("should redender correctly ",()=>{
    
    // const wrapper = shallow(<appComponent />);

    // expect(component).toMatchSnapShot();
  });
});