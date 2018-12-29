import React, { Component } from 'react'
import '../css/home.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:''
        }
    }
    
    render() {
        return (
            <div className="body-wrapper">
                <h1>Enter Shoool Name</h1>
                <input type={'text'} value={this.state.value} />
            </div>
        )
    }
}

export default Login