import React from 'react';


const Friend = ({history, location: {state: {data}}, match}) => {
    console.log(data);
    return(
        <div className="friend-container">
            <h1>{data.name}</h1>
            <h2>Age: {data.age}</h2>
            <h2>Email: {data.email}</h2>
            <button onClick={() => history.push('/dashboard')}>Back</button>
        </div>
    )
}

export default Friend