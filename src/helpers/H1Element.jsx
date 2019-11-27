import React from 'react'

function HeaderElement(props) {
    return <h1 {...props} > {props.text} </h1>;
}
export default HeaderElement;