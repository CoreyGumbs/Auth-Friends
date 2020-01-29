import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Normalize from 'react-normalize';
import './index.css';
import App from './App';


ReactDOM.render(
    <Router>
        <Normalize />
        <App />
    </Router>
, document.getElementById('root'));
