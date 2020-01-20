import React from 'react'

function InputField(props) {

    return (
        <input {...props} onChange={e => props.callback(e)} />
    )
}

export default InputField;

