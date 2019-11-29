import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
    return (
        <div className={this.props.className}>
            {this.props.title}
        </div>
    );
};

Alert.propTypes = {
    title:PropTypes.string
};

export default Alert;