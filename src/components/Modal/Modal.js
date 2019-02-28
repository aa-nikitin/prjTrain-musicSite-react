import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class Modal extends PureComponent {
    el = document.createElement('div');

    componentDidMount() {
        const { children } = this.props;
        if (children) {
            document.body.appendChild(this.el);
            this.el.id = 'modal';
        }
    }
    componentWillUnmount() {
        document.body.removeChild(this.el);
    }
    handleClose = () => {
        const { onClose } = this.props;
        onClose();
    };
    render() {
        const { children } = this.props;
        const modalForm = (
            <div className="modal-form">
                <div className="modal-form__info">{children}</div>
                <button
                    className="modal-form__button button"
                    onClick={this.handleClose}
                >
                    Закрыть
                </button>
            </div>
        );
        return ReactDOM.createPortal(modalForm, this.el);
    }
}

export { Modal };
