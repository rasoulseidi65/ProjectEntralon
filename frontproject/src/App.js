import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.css';

import DefaultLayout from './Views/Layout/Layout';
import routes from "./routes";
import {keys} from "@material-ui/core/styles/createBreakpoints";
function App()  {


        return (

            <DefaultLayout>
           <Switch>
            {
                routes.map((route,index) => (
                    <Route  {...route} key={index}/>
    ))
            }
            </Switch>
            </DefaultLayout>


    );

}

export default App;
