import React, { Component } from 'react';
import { postQuery } from '../api';
const { Provider, Consumer } = React.createContext();

class AuthProvider extends Component {
    state = {
        isAuthorized: false,
        errorAuth: ''
    };
    errorMessage = error => {
        if (error) {
            this.setState({ errorAuth: error });
        } else {
            this.setState({ isAuthorized: true, errorAuth: '' });
        }
    };
    componentDidMount() {
        postQuery({}, 'authFromToken')
            .then(auth => {
                this.errorMessage(auth.error);
            })
            .catch(error => {
                console.log(error);
            });
    }
    handleAutorize = (email, password) => {
        postQuery({ email, password }, 'login')
            .then(auth => {
                this.errorMessage(auth.error);
            })
            .catch(error => {
                console.log(error);
            });
    };
    handleLogout = () => {
        postQuery({}, 'logout')
            .then(() => {
                this.setState({ isAuthorized: false, errorAuth: '' });
            })
            .catch(error => {
                console.log(error);
            });
    };
    setValueProvider = () => {
        const { isAuthorized, errorAuth } = this.state;
        return {
            isAuthorized,
            errorAuth,
            handleAutorize: this.handleAutorize,
            handleLogout: this.handleLogout,
            redirectPath: '/login'
        };
    };
    render() {
        const { children } = this.props;

        return <Provider value={this.setValueProvider()}>{children}</Provider>;
    }
}

const withAuth = WrapperComponent => {
    return class extends Component {
        render() {
            return (
                <Consumer>
                    {ConsumerProps => (
                        <WrapperComponent {...ConsumerProps} {...this.props} />
                    )}
                </Consumer>
            );
        }
    };
};

export { AuthProvider, withAuth };
