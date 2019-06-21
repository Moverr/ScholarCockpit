import React from 'react'


function ButtonField(props){
    return <button onClick={props.handleClickEvent} > props.name </button>;
}
export default ButtonField;