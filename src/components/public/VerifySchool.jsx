import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import InputField from '../../forms/inputs/InputField';
import '../../css/verifyschool.css'


class VerifySchool extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  schoolname : null
            }
             
      }

      componentWillMount() {

      }

      componentDidMount() {

      }

      componentWillReceiveProps(nextProps) {

      }

      shouldComponentUpdate(nextProps, nextState) {

      }

      componentWillUpdate(nextProps, nextState) {

      }

      componentDidUpdate(prevProps, prevState) {

      }

      componentWillUnmount() {

      }

      render() {
            return (
                  <div className="container-fluid verifyschoolwrapper">
                       <form  role="form" onSubmit={this.handleSubmit} > 
                        <br/> 
                        <h2 className="center-align header"> SCHOOL NAME </h2>
                        <div className="form-group">
                        <InputField type="text" className="text form-control verify-textinput" value={this.state.schoolname} placeholder="Enter School Name " />         
                        
                        <button className="btn btn-primary col-md-12 verify-button green " type="submit">VERIFY</button>

                        </div> 
                        </form>                     
                  </div>
            );
      }

      
handleSubmit(e) {
      e.preventDefault();
}

handleChange(evt) {
      const value = evt.target.value;
      this.setState({
          ...this.state,
          [evt.target.name]: value
      });
  }




}

VerifySchool.propTypes = { 
};
 

 
export default VerifySchool;
