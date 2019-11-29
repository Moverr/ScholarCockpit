import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
    return (
        <div className={props.className} role={"alert"}>
            {props.message}
        </div>
    );
};

Alert.propTypes = {
    message:PropTypes.string
};

export default Alert;