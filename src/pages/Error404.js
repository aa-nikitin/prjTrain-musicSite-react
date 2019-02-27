import React from 'react';
import { Header } from '../components/';

const Error404 = () => {
    return (
        <Header linkMain="/">
            <div className="header__content">
                <h1 className="header__title">404</h1>
            </div>
        </Header>
    );
};

export { Error404 };
