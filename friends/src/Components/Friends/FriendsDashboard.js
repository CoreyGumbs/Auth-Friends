import React from 'react';
import Loader from 'react-loader-spinner';


import { axioswithAuth } from '../../utils/axiosAuth';


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

        axioswithAuth().get('http://localhost:5000/api/friends')
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
                        {friend.name}
                    </p>
                ))}
            </div>
        )
    }
}

export default FriendsDashboard;