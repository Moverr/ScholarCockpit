import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import InputField from '../../forms/inputs/InputField';


class VerifySchool extends Component {
      constructor(props) {
            super(props);
            

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
                        <br/>
                        <div className="form-group">
                        <InputField type="text" className="text form-control" value="" placeholder="Enter School Name " />
         
                        </div>
                      
                  </div>
            );
      }
}

VerifySchool.propTypes = {

};
 
 
export default VerifySchool;
