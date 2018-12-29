import React, { Component } from 'react'
import '../css/home.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
     handleChange(event){
        this.setState({value:event.target.value});
     }


     handleSubmit(event) {
        event.preventDefault();
        //todo: send data to the  server 
        alert('A name was submitted: ' + this.state.value);
       
      }



    render() { 

        if(!this.props.schoolname){
            return (
                this.shoolForm()
            )
        }
        
        return (
            this.loginForm()
        )
    }

    loginForm() {
        return <div className="body-wrapper">
            <form onSubmit={this.handleSubmit}>
                <h1> SCHOOL NAME</h1>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
            </form>
        </div>;
    }

    shoolForm() {
        return <div className="body-wrapper">
            <form onSubmit={this.handleSubmit}>
                <h1> SCHOOL NAME</h1>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
            </form>
        </div>;
    }
}

export default Login