import './App.css';
import React, { Component } from 'react';
import Main from './pages/Main/';
import Login from './pages/Login/';
import Admin from './pages/Admin/';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/admin" exact component={Admin} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
