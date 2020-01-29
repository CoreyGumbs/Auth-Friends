import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';
import logo from '../../img/friends.png';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    componentDidMount(){
        if(localStorage.getItem('token')){
            this.setState({
                isLoggedIn: !this.state.isLoggedIn
            });
        }else if(!localStorage.getItem('active')){
            this.setState({
                isLoggedIn: false
            })
        }
    }


    render(){
        console.log(localStorage.getItem('active'));
        return(
            <div className="navbar-container">
                <div className="friends-logo-nav-bar">
                    <img src={logo} alt="Friend Logo"/>
                </div>
               
                {this.state.isLoggedIn &&

                    <div className="nav-bar-links-container">
                        <NavLink to="/dashboard">
                            Home
                        </NavLink>
                        <NavLink to='/add-friend'>
                            Add Friend    
                        </NavLink>
                        <NavLink to="/logout">  
                            Logout
                        </NavLink>
                    </div>
                }

                    
            </div>
        )   

    }
}

export default NavBar;