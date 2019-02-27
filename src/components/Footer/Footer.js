import React from 'react';
import { Logo } from '../Logo';
import { Socials } from '../Socials';
import { withAuth } from '../../context/';

const ForFooter = ({ isAuthorized }) => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__auth">
                    <Logo linkMain="/login">
                        {isAuthorized ? 'Админка' : 'Авторизация'}
                    </Logo>
                </div>
                <div className="footer__social">
                    <Socials />
                </div>
            </div>
        </footer>
    );
};

const Footer = withAuth(ForFooter);

export { Footer };
