import './App.css';
import React, { Component } from 'react';
import { Main, Login, Admin, Error404 } from './pages/';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute as PrivRoute } from './components/';
import { AuthProvider, withAuth, DataProvider } from './context/';

const PrivateRoute = withAuth(PrivRoute);

class App extends Component {
    render() {
        return (
            <DataProvider>
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
            </DataProvider>
        );
    }
}

export default App;
