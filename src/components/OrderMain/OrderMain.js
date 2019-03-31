import React, { PureComponent } from 'react';
import { Modal } from '../Modal';
import { postQuery } from '../../api';

class OrderMain extends PureComponent {
    state = {
        errorMessage: '',
        name: '',
        email: '',
        message: ''
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { name, email, message } = this.state;
        if (!name || !email || !message) {
            this.setState({ errorMessage: 'Все поля нужно заполнить!' });
        } else {
            postQuery({ name, email, message }, 'sendOrder')
                .then(result => {
                    this.setState({
                        errorMessage: result.maessage,
                        name: '',
                        email: '',
                        message: ''
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }

        // console.log(this.state);
    };
    handleClose = () => {
        this.setState({ errorMessage: '' });
    };
    render() {
        const { errorMessage } = this.state;
        return (
            <section className="form" id="form-msgemail">
                {errorMessage && (
                    <Modal onClose={this.handleClose}>{errorMessage}</Modal>
                )}
                <div className="container">
                    <div className="form__subtitle subtitle">
                        Контактные данные
                    </div>
                    <h2 className="form__title title">Пишите, пообщаемся</h2>
                    <form className="form-email" action="/" method="POST">
                        <div className="form-email__line">
                            <label className="form-email__label" htmlFor="">
                                Имя *
                            </label>
                            <input
                                className="form-email__input"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </div>
                        <div className="form-email__line">
                            <label className="form-email__label" htmlFor="">
                                Email *
                            </label>
                            <input
                                className="form-email__input"
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="form-email__line">
                            <label className="form-email__label" htmlFor="">
                                Сообщение
                            </label>
                            <textarea
                                className="form-email__textarea"
                                name="message"
                                onChange={this.handleChange}
                                value={this.state.message}
                            />
                        </div>
                        <div className="form-email__line">
                            <button
                                className="form-email__button button"
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
export { OrderMain };
