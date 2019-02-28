import React, { PureComponent } from 'react';
import { Modal } from '../Modal';

class AdminProducts extends PureComponent {
    state = {
        errorMessage: ''
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { photo, name, price } = this.state;
        if (!photo || !name || !price) {
            this.setState({ errorMessage: 'Все поля нужно заполнить!' });
        } else {
            this.setState({ errorMessage: '' });
        }
        console.log(this.state);
    };
    handleClose = () => {
        this.setState({ errorMessage: '' });
    };
    render() {
        const { errorMessage } = this.state;
        return (
            <form
                className="form-upload"
                action="/admin/upload"
                method="POST"
                encType="multipart/form-data"
            >
                {errorMessage && (
                    <Modal onClose={this.handleClose}>{errorMessage}</Modal>
                )}
                <div className="form-title">Добавить товар</div>
                <div className="form-upload__input-line">
                    <div className="form-upload__wraper">
                        <label className="form-upload__label">
                            <input
                                className="form-upload__input-file"
                                name="photo"
                                type="file"
                                onChange={this.handleChange}
                            />
                            <span className="form-upload__input-file-title">
                                Загрузить фото
                            </span>
                        </label>
                    </div>
                </div>
                <div className="form-upload__input-line">
                    <input
                        className="form-upload__input"
                        name="name"
                        type="text"
                        placeholder="Название"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-upload__input-line">
                    <input
                        className="form-upload__input"
                        name="price"
                        type="text"
                        placeholder="Цена"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-upload__input-line form-upload__input-line--btn">
                    <button
                        className="button"
                        type="submit"
                        onClick={this.handleSubmit}
                    >
                        Добавить
                    </button>
                </div>
            </form>
        );
    }
}

export { AdminProducts };
