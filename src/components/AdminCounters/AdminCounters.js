import React, { PureComponent } from 'react';
import { Modal } from '../Modal';

class AdminCounters extends PureComponent {
    state = {
        errorMessage: ''
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { age, concerts, cities, years } = this.state;

        if (age >= 0 && concerts >= 0 && cities >= 0 && years >= 0) {
            this.setState({ errorMessage: '' });
        } else {
            this.setState({
                errorMessage: 'Все поля должны быть целым числом >=0!'
            });
        }
        console.log(this.state);
    };
    handleClose = () => {
        this.setState({ errorMessage: '' });
    };
    render() {
        const { errorMessage } = this.state;
        return (
            <form className="form-skill" action="/admin/skills" method="POST">
                {errorMessage && (
                    <Modal onClose={this.handleClose}>{errorMessage}</Modal>
                )}
                <div className="form-title">Счетчики</div>
                <label className="form-skill__input-line">
                    <span className="form-skill__input-title">Возраст</span>
                    <input
                        className="form-skill__input"
                        name="age"
                        type="number"
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form-skill__input-line">
                    <span className="form-skill__input-title">Концертов</span>
                    <input
                        className="form-skill__input"
                        name="concerts"
                        type="number"
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form-skill__input-line">
                    <span className="form-skill__input-title">
                        Число городов
                    </span>
                    <input
                        className="form-skill__input"
                        name="cities"
                        type="number"
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form-skill__input-line">
                    <span className="form-skill__input-title">
                        Лет на сцене
                    </span>
                    <input
                        className="form-skill__input"
                        name="years"
                        type="number"
                        onChange={this.handleChange}
                    />
                </label>
                <div className="form__btns form-skill__input-line">
                    <button
                        className="button"
                        type="submit"
                        onClick={this.handleSubmit}
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        );
    }
}

export { AdminCounters };
