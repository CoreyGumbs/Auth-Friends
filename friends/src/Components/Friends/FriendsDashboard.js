import React, {useState, useEffect} from 'react';
import Loader from 'react-loader-spinner';


import { axioswithAuth } from '../../utils/axiosAuth';


const FriendsDashboard = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();
   ;

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

    console.log(data);
    return (
        <div className="friends-dashboard-container">
           {isLoading &&
             <Loader type="TailSpin" />
           }
        
           {!isLoading && 
            <h1>Hello</h1>
           }

           
        </div>
    )
}

export default FriendsDashboard;