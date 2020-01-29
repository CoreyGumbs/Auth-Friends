import React from 'react';
import axios from 'axios';

import Loader from 'react-loader-spinner';

import './login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            error: false,
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

    handleLogin = e => {
        e.preventDefault();
        const {credentials} = this.state;
        const loginCreds = {
            username:  credentials.username,
            password:  credentials.password
        }

        this.setState({
            ...this.state,
            isLoading: !this.state.isLoading
        });

        axios.post('http://localhost:5000/api/login', loginCreds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.setState({
                ...this.state,
                isLoading: !this.state.isLoading
            })
            this.props.history.push('/dashboard');
            console.log(res);
        })
        .catch(err => {
            this.setState({
                ...this.state,
                error: !this.state.error,
                isLoading: !this.state.isLoading
            })
            console.log(err)
        });

    }

    render(){
        console.log(this.state.isLoading);
        return(
           <div className="login-form-container">
                {this.state.isLoading && 
                    <Loader  type="TailSpin"/>
                } 
                
                {this.state.error && !this.state.isLoading &&
                    <>
                    <h1>Oh No!</h1>
                    <h2 className="load-error">
                        Something Went Wrong. Please Try Again.
                    </h2>
                    </>
                }

                {!this.state.isLoading && !this.state.error &&

                    <form className="login-form" onSubmit={this.handleLogin}>
                        <div className="input-username-container">
                            <label className="login-label" htmlFor="username">Username:</label>
                            <input className="login-input" type="text" name="username" value={this.state.credentials.username} onChange={this.handleChanges}/>
                        </div>
                        <div className="input-password-container">
                            <label className="login-label" htmlFor="password">Password:</label>
                            <input className="login-input" type="password" name="password" value={this.state.credentials.password} onChange={this.handleChanges}/>
                        </div>
                        <div className="submit-btn-container">
                            <button className="submit-btn">Login</button>
                        </div>
                    </form>

                }
           </div>
        )
    }
}

export default Login;