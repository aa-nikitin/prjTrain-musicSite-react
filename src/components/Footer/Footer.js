import React from 'react';
import { Logo } from '../Logo';
import { Socials } from '../Socials';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__auth">
                    <Logo linkMain="/login">Авторизация</Logo>
                </div>
                <div className="footer__social">
                    <Socials />
                </div>
            </div>
        </footer>
    );
};

export { Footer };
