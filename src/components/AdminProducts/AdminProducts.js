import React, { PureComponent } from 'react';
import { Modal } from '../Modal';
import { prodQuery } from '../../api';
import { withData } from '../../context/';

class ForAdminProducts extends PureComponent {
    state = {
        errorMessage: '',
        name: '',
        price: ''
    };

    myRef = React.createRef();
    handleChange = e => {
        if (e.target.files) {
            this.setState({ [e.target.name]: e.target.files[0] });
        } else this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { photo, name, price } = this.state;
        const { updateProducts } = this.props;
        if (!photo || !name || !price) {
            this.setState({ errorMessage: 'Все поля нужно заполнить!' });
        } else {
            prodQuery({ name: name, price: price, image: photo })
                .then(series => {
                    this.myRef.current.value = '';
                    this.setState({
                        errorMessage: series.maessage,
                        photo: '',
                        name: '',
                        price: ''
                    });
                    updateProducts();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };
    handleClose = () => {
        this.setState({ errorMessage: '' });
    };
    render() {
        const { errorMessage, name, price } = this.state;
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
                                ref={this.myRef}
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
                        value={name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-upload__input-line">
                    <input
                        className="form-upload__input"
                        name="price"
                        type="text"
                        placeholder="Цена"
                        value={price}
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

const AdminProducts = withData(ForAdminProducts);

export { AdminProducts };
