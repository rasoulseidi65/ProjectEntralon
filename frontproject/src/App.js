import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import DefaultLayout from './Views/Layout/Layout';
import routes from "./routes";
import {keys} from "@material-ui/core/styles/createBreakpoints";
class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <DefaultLayout>
           <Switch>
            {
                routes.map((route,index) => (
                    <Route  {...routes} key={index} />
    ))
            }
            </Switch>
            </DefaultLayout>
        </BrowserRouter>

    );
    }
}

export default App;
