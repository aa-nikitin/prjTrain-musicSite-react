import React from 'react';

const AdminContent = () => {
    return (
        <section className="admin-content">
            <div className="container admin-content__container">
                <div className="form-container">
                    <form
                        className="form-skill"
                        action="/admin/skills"
                        method="POST"
                    >
                        <div className="form-title">Счетчики</div>
                        <label className="form-skill__input-line">
                            <span className="form-skill__input-title">
                                Возраст
                            </span>
                            <input
                                className="form-skill__input"
                                name="age"
                                type="number"
                            />
                        </label>
                        <label className="form-skill__input-line">
                            <span className="form-skill__input-title">
                                Концертов
                            </span>
                            <input
                                className="form-skill__input"
                                name="concerts"
                                type="number"
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
                            />
                        </label>
                        <div className="form__btns form-skill__input-line">
                            <button className="button" type="submit">
                                Сохранить
                            </button>
                        </div>
                    </form>
                    <form
                        className="form-upload"
                        action="/admin/upload"
                        method="POST"
                        encType="multipart/form-data"
                    >
                        <div className="form-title">Добавить товар</div>
                        <div className="form-upload__input-line">
                            <div className="form-upload__wraper">
                                <label className="form-upload__label">
                                    <input
                                        className="form-upload__input-file"
                                        name="photo"
                                        type="file"
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
                            />
                        </div>
                        <div className="form-upload__input-line">
                            <input
                                className="form-upload__input"
                                name="price"
                                type="text"
                                placeholder="Цена"
                            />
                        </div>
                        <div className="form-upload__input-line form-upload__input-line--btn">
                            <button className="button" type="submit">
                                Добавить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
export { AdminContent };
