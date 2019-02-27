import './App.css';
import React, { Component } from 'react';
// import Main from './pages/Main/';
// import Login from './pages/Login/';
// import Admin from './pages/Admin/';
// import Error404 from './pages/Error404/';
import { Main, Login, Admin, Error404 } from './pages/';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute as PrivRoute } from './components/';
import { AuthProvider, withAuth } from './context/';

const PrivateRoute = withAuth(PrivRoute);

class App extends Component {
    render() {
        return (
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/admin" component={Admin} />
                        <Route path="*" exact component={Error404} />
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        );
    }
}

export default App;
