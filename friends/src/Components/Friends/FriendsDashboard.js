import React from 'react';
import { Route, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { axioswithAuth } from '../../utils/axiosAuth';

import Friend from './Friend';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


class FriendsDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            data: []
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = () => {
        this.setState({
            ...this.state,
            isLoading: !this.state.isLoading
        })

        axioswithAuth().get('api/friends')
        .then( res => {
            this.setState({
                ...this.state,
                data: res.data,
                isLoading: !this.state.isLoading
            })
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className="FriendsDashboard-container">
                
                {this.state.isLoading && 
                    <Loader type='TailSpin'/>

                }
                {this.state.data.map(friend  => (
                    <p key={friend.id}>
                        <Link to={{
                            pathname: `/${friend.id}/friend`,
                            state: {data: friend}
                        }}>
                            {friend.name}
                        </Link>

                    </p>
                ))}
 
            </div>
        )
    }
}

export default FriendsDashboard;