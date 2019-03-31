import React, { PureComponent } from 'react';
import { Modal } from '../Modal';
import { updateCounters } from '../../api';
import { withData } from '../../context/';

class ForAdminCounters extends PureComponent {
    state = {
        errorMessage: ''
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { age, concerts, cities, years } = this.state;
        const { updateCount } = this.props;
        if (age >= 0 && concerts >= 0 && cities >= 0 && years >= 0) {
            this.setState({ errorMessage: '' });
            const arrCounter = [
                { name: 'age', count: age },
                { name: 'concerts', count: concerts },
                { name: 'cities', count: cities },
                { name: 'years', count: years }
            ];
            updateCounters(arrCounter)
                .then(series => {
                    this.setState({
                        errorMessage: series.maessage
                    });
                    updateCount();
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            this.setState({
                errorMessage: 'Все поля должны быть целым числом >=0!'
            });
        }
    };
    handleClose = () => {
        this.setState({ errorMessage: '' });
    };
    render() {
        const { counters } = this.props;
        const { errorMessage } = this.state;
        return (
            <form className="form-skill" action="/admin/skills" method="POST">
                {errorMessage && (
                    <Modal onClose={this.handleClose}>{errorMessage}</Modal>
                )}
                <div className="form-title">Счетчики</div>
                {counters.map(item => {
                    return (
                        <label
                            key={item._id}
                            className="form-skill__input-line"
                        >
                            <span className="form-skill__input-title">
                                {item.head}
                            </span>
                            <input
                                className="form-skill__input"
                                name={item.name}
                                type="number"
                                onChange={this.handleChange}
                            />
                        </label>
                    );
                })}
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

const AdminCounters = withData(ForAdminCounters);

export { AdminCounters };
