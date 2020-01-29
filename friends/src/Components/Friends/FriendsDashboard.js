import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';


import { axioswithAuth } from '../../utils/axiosAuth';


const FriendsDashboard = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();
    const [apiPath, setApiPath] = useState('api/friends');
    const [auth] = useState(localStorage.getItem('token'));

    useEffect(() => {
        setIsLoading(!isLoading);
        axioswithAuth().get(`http://localhost:5000/api/friends`)
        .then(res => {
            setIsLoading(isLoading);
            setData(res.data);
            console.log(res);
        })
        .catch(err => console.log(err));


    }, []);

   
    return (
        <div className="friends-dashboard-container">
           {isLoading &&
           <Loader type="TailSpin" />
           }

           
        </div>
    )
}

export default FriendsDashboard;