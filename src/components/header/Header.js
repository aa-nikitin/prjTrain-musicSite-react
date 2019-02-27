import React from 'react';
import { Logo } from '../Logo';
import { Socials } from '../Socials';

const Header = ({ children, linkMain }) => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__top">
                    <Logo linkMain={linkMain}>Архипов</Logo>
                    <div className="header__social">
                        <Socials />
                    </div>
                </div>
                {children}
            </div>
        </header>
    );
};
// export default Header;
export { Header };
