import React from 'react';

const LoginForm = () => {
    return (
        <form className="form-login" action="/login" method="POST">
            <div className="form-login__line">
                <label className="form-login__label" htmlFor="">
                    Привет,
                </label>
                <input
                    className="form-login__input"
                    type="email"
                    name="email"
                    placeholder="E-MAIL"
                />
            </div>
            <div className="form-login__line">
                <input
                    className="form-login__input"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                />
            </div>
            <div className="form-login__line">
                <button className="form-login__button" type="submit">
                    Войти
                </button>
            </div>
        </form>
    );
};
export { LoginForm };
