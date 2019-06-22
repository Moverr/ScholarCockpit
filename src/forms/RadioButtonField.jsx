import React from 'react'
import InputField from './InputField';



function RadioButtonField(props){
    return <InputField type="checkbox" {...props} />; 
}
export default RadioButtonField;