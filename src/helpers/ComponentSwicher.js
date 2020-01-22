import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSchoolName, getSchoolName } from '../../store/actions/schoolAction';
import { currentscreen, nextscreen, prevscreen, screenstatus } from '../../store/actions/authenticationAction';

import { withRouter, useHistory, NavLink } from 'react-router-dom';
import InputField from '../../forms/inputs/InputField';
import '../../css/verifyschool.css';
import Alert from '../../helpers/Alert';
import { VerifySchoolService } from '../../services/SchoolSeervice';
import { getCurrentScreen } from '../helpers/Utils';



function ComponentSwicher(...props) {
    const screen = getCurrentScreen();
    switch (screen.toLowerCase()) {

        case "login":
            props.history.push("/login");
            break;

        case "dashboard":
            props.history.push("/dashboard");
            break;

        default:
            props.history.push("/");
            break;
    }

}

export default ComponentSwicher(VerifySchool);

