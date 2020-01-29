import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChanges =  e => {
   
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    render(){
        return(
           <div className="login-form-container">
               <form action="" className="login-form">
                   <div className="input-username-container">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={this.state.credentials.username} onChange={this.handleChanges}/>
                   </div>
                   <div className="input-password-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.handleChanges}/>
                   </div>
               </form>
           </div>
        )
    }
}

export default Login;