import React from 'react'

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.callback(e);
    }


    render() {
        return (
            <input {...this.props} onChange={this.handleChange} />

        )

    }
}


// function handleChange(e) {
//     // this.setState({ schoolName: event.target.value });
//     // props.value = result;
// }

// function InputField(props) {
//     return <input {...props}    />;
// }
export default InputField;