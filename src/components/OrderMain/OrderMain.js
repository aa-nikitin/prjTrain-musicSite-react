import React from 'react';

const OrderMain = () => {
    return (
        <section className="form" id="form-msgemail">
            <div className="container">
                <div className="form__subtitle subtitle">Контактные данные</div>
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
                        />
                    </div>
                    <div className="form-email__line">
                        <label className="form-email__label" htmlFor="">
                            Сообщение
                        </label>
                        <textarea
                            className="form-email__textarea"
                            name="message"
                        />
                    </div>
                    <div className="form-email__line">
                        <button
                            className="form-email__button button"
                            type="submit"
                        >
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
export { OrderMain };
