import React, { Component } from 'react'
import '../css/home.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            schoolname:''
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            value: !this.props.schoolname ? null : this.props.schoolname 
        }           
        )


    }

     handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value });
     }


     handleSubmit(event) {
        event.preventDefault();
       }



    render() { 

  
        return (
            this.loginForm()
        )        
    }

    loginForm() {
        return <div className="body-wrapper">
            <form onSubmit={this.handleSubmit}>
                <h1> LOGIN FORM</h1>
                <label>Username</label>
                <input  name="username" type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
                <label>Password</label>
                <input  name="password" type="password" className="form-control" value={this.state.value} onChange={this.handleChange} />
                
            </form>
        </div>;
    }
 
 
}

export default Login