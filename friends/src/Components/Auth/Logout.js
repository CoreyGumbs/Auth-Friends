import React, {Component} from 'react';
import Loader from 'react-loader-spinner';

class Logout extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount(){
       
        if(localStorage.getItem('token')){
            localStorage.removeItem('token');
            localStorage.setItem('active', false);
        }

        this.props.history.push('/');
    }
    
    render(){
        return(
            <div className="logout-btn-container">
                    {this.state.isLoading &&
                        <Loader type='TailSpin' />
                    }
            </div>
        )
    }
    
}

export default Logout;