import React from 'react';

import { axioswithAuth } from '../../utils/axiosAuth';
class AddFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
            isLoading: false
        }
    }

    handleChanges =  e => {
   
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
      
        this.setState({
            ...this.state,
            isLoading: !this.state.isLoading
        });

        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }

        axioswithAuth().post('api/friends', newFriend)
        .then(res => {
            this.setState({
                ...this.state,
                isLoading: !this.state.isLoading
            });
            this.props.history.push('/dashboard');
            console.log(res);
        })
        .catch(err => {
            this.setState({
                ...this.state,
                error: err
            })
            console.log(err);
        });
    }

    render(){
 
        return(
            <div className="add-form-container">
                {!this.state.isLoading && 

                    <form onSubmit={this.handleSubmit}>
                        <div className="add-input-container">
                            <label className="add-form-label" htmlFor="name">
                            Name:    
                            </label>
                            <input className="add-input" name="name" id="name" type="text" value={this.state.name} onChange={this.handleChanges} required/>
                        </div>
                        <div className="add-input-container">
                            <label className="add-form-label" htmlFor="age">
                                Age:
                            </label>
                            <input className="add-input" name="age" id="age" type="number" value={this.state.age} onChange={this.handleChanges} min="0" max="120" required/>
                        </div>
                        <div className="add-input-container">
                            <label className="add-form-label" htmlFor="email">
                                Email:
                            </label>
                            <input className="add-input" type="email" name="email" id="email" value={this.state.email} onChange={this.handleChanges} required/>
                        </div>
                        <div className="add-form-btn-contianer">
                            <button className="add-form-btn">
                                Add Friend
                            </button>
                        </div>
                    </form>
                }
                
            </div>
        )
    }
}

export default AddFriend;