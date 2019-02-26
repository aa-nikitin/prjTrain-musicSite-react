import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__auth">
                    <Link className="title-name" to="/login">
                        Авторизация<span className="title-name__doter">.</span>
                    </Link>
                </div>
                <div className="footer__social">
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
                            <a className="social__link" href="http://">
                                <i className="fa fa-vk" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
