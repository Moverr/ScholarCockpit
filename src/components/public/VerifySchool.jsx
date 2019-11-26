import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import InputField from '../../forms/inputs/InputField';


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
                  <div className="container-fluid">
                       <form  role="form" onSubmit={this.handleSubmit} > 
                        <br/>
                        <h2> SCHOOL NAME </h2>
                        <div className="form-group">
                        <InputField type="text" className="text form-control" value={this.state.schoolname} placeholder="Enter School Name " />         
                        </div> 
                        </form>                     
                  </div>
            );
      }
}

VerifySchool.propTypes = { 
};
 
 
export default VerifySchool;
