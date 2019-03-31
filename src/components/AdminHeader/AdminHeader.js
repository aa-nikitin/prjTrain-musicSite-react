import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/';

const ForAdminHeader = props => {
    const { handleLogout } = props;

    return (
        <header className="admin-header">
            <div className="container admin-header__container">
                <div className="admin-header__title">
                    Административная панель
                </div>
                <Link className="admin-header__link" to="/">
                    Вернуться на сайт
                </Link>
                <div className="admin-header__logout" onClick={handleLogout}>
                    Выход
                </div>
            </div>
        </header>
    );
};

const AdminHeader = withAuth(ForAdminHeader);
export { AdminHeader };
