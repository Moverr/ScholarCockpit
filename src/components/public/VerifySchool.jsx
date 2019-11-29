import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../forms/inputs/InputField';
import '../../css/verifyschool.css';
import { NavLink } from 'react-router-dom';



class VerifySchool extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  schoolname: null
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
                        <form role="form" onSubmit={this.handleSubmit} >
                              <br />
                              <h3 className="center-align header">Enter Your school name. </h3>

                              <div className="form-group">
                                   
                                    <InputField type="text" className="text form-control verify-textinput" value={this.state.schoolname} placeholder=" " />
                                    <button className="btn btn-primary col-md-12 verify-button gray " type="submit">NEXT</button>

                                    <ul className="nav sublinks">
                                          <li> <NavLink   to={'#'} activeClassName="active"> Find School </NavLink>
                                          </li>
                                           
                                          <li> <NavLink to={'#'} activeClassName="active"> Register  school   </NavLink>
                                          </li>

                                    </ul>
                              </div>
                        </form>
                  </div>
            );
      }


      handleSubmit(e) {
            e.preventDefault();
            alert("Pass");
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
