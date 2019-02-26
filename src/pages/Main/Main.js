import React, { Fragment } from 'react';
import {
    Header,
    About,
    MyNumbers,
    Products,
    OrderMain,
    Footer
} from '../../components/';

const Main = () => {
    return (
        <Fragment>
            <Header>
                <div className="header__content">
                    <h1 className="header__title">“Главное — это музыка”</h1>
                    <a
                        className="header__link"
                        href="https://www.youtube.com/watch?v=nBE85Qy_SLc"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Смотреть видео
                    </a>
                </div>
                <div className="header__scroll">
                    <div className="header__scroll-text">Scroll</div>
                </div>
            </Header>
            <About />
            <MyNumbers />
            <Products />
            <OrderMain />
            <Footer />
        </Fragment>
    );
};

export default Main;
