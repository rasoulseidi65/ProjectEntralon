import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/mdbootstrap/css/mdb.min.css";
import "./assets/mdbootstrap/css/mdb.lite.min.css";
import "./assets/mdbootstrap/css/modules/animations-extended.min.css";
import * as serviceWorker from './serviceWorker';
import 'jquery/dist/jquery.min.js';

import "bootstrap/dist/js/bootstrap.bundle.min";

import {BrowserRouter} from "react-router-dom";
ReactDOM.render(  <BrowserRouter><App /> </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
