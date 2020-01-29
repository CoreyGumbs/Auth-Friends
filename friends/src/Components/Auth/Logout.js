import React from 'react';
import {Link} from 'react-router-dom';

const Logout = (props) => {

    const logOut = () => {
        if(localStorage.getItem('token')){
            localStorage.removeItem('token');
        }
    }
    console.log(props);
    return(
        <div className="logout-btn-container">
                <Link to='/'>
                    <button className="logout-btn" onClick={logOut}>
                        Log Out
                    </button>
                </Link>
        </div>
    )
}

export default Logout;