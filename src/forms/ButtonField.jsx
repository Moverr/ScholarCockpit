import React from 'react'



function ButtonField(props){
    
    return <button name={props.name} onClick={props.handleClick}> props.title </button>;
}
export default ButtonField;