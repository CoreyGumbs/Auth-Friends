import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import { Link } from 'react-router-dom';

import {axioswithAuth} from '../../utils/axiosAuth';
class Friend extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoading: true
        }
    }

    componentDidMount(){
        this.fetchFriend();
    }

    fetchFriend = () => {
        
        axioswithAuth().get(`api/friends/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                ...this.state,
                isLoading: !this.state.isLoading,
                data: res.data
            });
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    deleteFriend = () => {
        axioswithAuth().delete(`api/friends/${this.props.match.params.id}`)
        .then( res => {
            this.props.history.push('/dashboard');
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    
    render(){
        console.log(this.props);
        const {data} = this.state;
        return(
            <div className="friend-container">
                {this.stateisLoading &&
                    <Loader type="TailSpin" />
                }

                {!this.state.isLoading && 
                <div className="friend-data-container">
                    <h2>{data.name}</h2>
                    <h3>Age: {data.age}</h3>
                    <h3>Email: {data.email}</h3>
                    <Link to={'/dashboard'}>
                        <button>Back</button>
                    </Link>
                    <button className="delete" onClick={this.deleteFriend}>
                        Delete
                    </button>
                </div> 
                }
            </div>
        )
    }
}

export default Friend