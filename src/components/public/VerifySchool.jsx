import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSchoolName, getSchoolName } from '../../store/actions/schoolAction';
import { currentscreen, nextscreen, prevscreen, screenstatus } from '../../store/actions/authenticationAction';


import { withRouter, useHistory, NavLink } from 'react-router-dom';


import InputField from '../../forms/inputs/InputField';
import '../../css/verifyschool.css';
import Alert from '../../helpers/Alert';

//todo: services 
import { VerifySchoolService } from '../../services/SchoolSeervice'



function VerifySchool(props) {

      const [schoolname, set_schoolname] = useState(null);
      const [message_status, set_messagestatus] = useState('-success displaynone');
      const [message, set_message] = useState('Wait a minute');
      


      const auth = useSelector(state => state.auth);
  
      const dispatch = useDispatch();


      const handleSubmit = (e) => {
            e.preventDefault();

            set_messagestatus('-warning  displaynone');
            set_message('school name is required')

            let school_name = (schoolname == null) ? null : schoolname;

            if (school_name == null || school_name.length == 0) {

                  set_messagestatus('-warning');
                  set_message(' school name is required');
                  return;
            }

            //todo: Verify School 
            VerifySchoolService(school_name, (response) => {
                  dispatch(setSchoolName(schoolname))


                  dispatch(nextscreen("LOGIN"));
                  dispatch(prevscreen("VERIFYSCHOOL"));
                  dispatch(currentscreen("LOGIN"));



                  props.history.push("/login");


            })

      }




      return (

            <div className="container-fluid verifyschoolwrapper">



                  <form role="form" onSubmit={handleSubmit} >
                        <br />
                        <h3 className="center-align header">Enter Your school name. </h3>
                        <Alert message={message} className={'alert alert' + message_status} role={"alert"} />

                        <div className="form-group">

                              <InputField type="text" className="text form-control verify-textinput" callback={e => set_schoolname(e.target.value)} name="schoolname" value={schoolname}
                                    placeholder=" " />
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

VerifySchool.propTypes = {
};



export default withRouter(VerifySchool);
