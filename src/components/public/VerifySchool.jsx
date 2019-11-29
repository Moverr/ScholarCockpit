import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../forms/inputs/InputField';
import '../../css/verifyschool.css';
import { NavLink } from 'react-router-dom';
import Alert from '../../helpers/Alert';



class VerifySchool extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  schoolname: null,
                  message_status: '-success displaynone',
                  message: ' Wait a minute '
            };

      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);


      }

      componentWillMount() {

      }

      componentDidMount() {

      }
 

      handleSubmit(e) {
            e.preventDefault();
            this.setState({
                  message_status: '-warning ',
			message: ' Trust Me '
            });
 
 
      }

      
      handleChange(evt) {
            const value = evt.target.value;
            this.setState({
                  ...this.state,
                  [evt.target.name]: value
            });
      }




      render() {
            return (
                  <div className="container-fluid verifyschoolwrapper">
                        <form role="form" onSubmit={this.handleSubmit} >
                              <br />
                              <h3 className="center-align header">Enter Your school name. </h3>
                              <Alert message={this.state.message}  className={'alert alert' + this.state.message_status} role={"alert"} />
                               
                              <div className="form-group">

                                    <InputField type="text" className="text form-control verify-textinput" value={this.state.schoolname} placeholder=" " />
                                    <button className="btn btn-primary col-md-12 verify-button gray " type="submit">NEXT</button>

                                    <ul className="nav sublinks">
                                          <li> <NavLink to={'#'} activeClassName="active"> Find School </NavLink>
                                          </li>

                                          <li> <NavLink to={'#'} activeClassName="active"> Register  school   </NavLink>
                                          </li>

                                    </ul>
                              </div>
                        </form>
                  </div>
            );
      }


    



}

VerifySchool.propTypes = {
};



export default VerifySchool;
