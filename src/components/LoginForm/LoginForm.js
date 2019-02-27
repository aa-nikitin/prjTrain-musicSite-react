import React, { PureComponent } from 'react';
import { withAuth } from '../../context/';
import { Redirect } from 'react-router-dom';

class Form extends PureComponent {
    state = {
        email: '',
        password: ''
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { handleAutorize } = this.props;
        const { email, password } = this.state;
        handleAutorize(email, password);
    };
    render() {
        const { isAuthorized, errorAuth } = this.props;
        return !isAuthorized ? (
            <form className="form-login" action="/login" method="POST">
                {errorAuth && <div className="status">{errorAuth}</div>}
                <div className="form-login__line">
                    <label className="form-login__label" htmlFor="">
                        Привет,
                    </label>
                    <input
                        className="form-login__input"
                        type="email"
                        name="email"
                        placeholder="E-MAIL"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-login__line">
                    <input
                        className="form-login__input"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-login__line">
                    <button
                        onClick={this.handleSubmit}
                        className="form-login__button"
                        type="submit"
                    >
                        Войти
                    </button>
                </div>
            </form>
        ) : (
            <Redirect to="/admin" />
        );
    }
}

const LoginForm = withAuth(Form);

export { LoginForm };
