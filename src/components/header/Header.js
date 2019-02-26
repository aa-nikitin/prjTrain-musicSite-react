import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__top">
                    <Link className="header__text title-name" to="/">
                        Архипов<span className="title-name__doter">.</span>
                    </Link>
                    <div className="header__social">
                        <ul className="social">
                            <li className="social__item">
                                <a className="social__link" href="http://">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                            <li className="social__item">
                                <a className="social__link" href="http://">
                                    <i className="fa fa-github-alt" />
                                </a>
                            </li>
                            <li className="social__item">
                                <a className="social__link" href="http://">
                                    <i className="fa fa-tumblr" />
                                </a>
                            </li>
                            <li className="social__item">
                                <a
                                    className="social__link"
                                    href="https://vk.com/feed"
                                >
                                    <i className="fa fa-vk" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
        </header>
    );
};
// export default Header;
export { Header };
