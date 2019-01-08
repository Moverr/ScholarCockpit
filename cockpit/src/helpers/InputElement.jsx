import React, { Component } from 'react';

//This is a stateless component
class InputElement extends Component {
	render() {
		const { username, callback, name, type, className } = this.props;
		return <input name={name} type={type} className={className} value={username} onChange={callback} />;
	}
}

export default InputElement;
