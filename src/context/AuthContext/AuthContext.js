import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class AuthProvider extends Component {
    email = 'admin@mail.ru';
    password = '123';
    state = {
        isAuthorized: false,
        errorAuth: ''
    };
    handleAutorize = (email, password) => {
        if (email === this.email && password === this.password) {
            this.setState({ isAuthorized: true, errorAuth: '' });
        } else {
            this.setState({ errorAuth: 'Неверно введен логин или пароль' });
        }
    };
    setValueProvider = () => {
        const { isAuthorized, errorAuth } = this.state;
        return {
            isAuthorized,
            errorAuth,
            handleAutorize: this.handleAutorize,
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
