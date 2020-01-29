import axios from 'axios';

export const axioswithAuth = () => {
    const token =  localStorage.getItem('token');   

    return axios.create({
        headers: {
            baseUrl: 'http://localhost:5000/',
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
}