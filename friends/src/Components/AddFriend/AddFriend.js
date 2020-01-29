import React from 'react';

class AddFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
            id: '',
            isLoading: false
        }
    }

    handleChanges =  e => {
   
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <div className="add-form-container">
                <form action="">

                </form>
            </div>
        )
    }
}

export default AddFriend;