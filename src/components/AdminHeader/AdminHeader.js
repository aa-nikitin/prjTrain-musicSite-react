import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <header className="admin-header">
            <div className="container admin-header__container">
                <div className="admin-header__title">
                    Административная панель
                </div>
                <Link className="admin-header__link" to="/">
                    Вернуться на сайт
                </Link>
            </div>
        </header>
    );
};
export { AdminHeader };
