import React from 'react'

function H1Element(props) {
    return <h1 {...props} > {props.text} </h1>;
}
export default H1Element;