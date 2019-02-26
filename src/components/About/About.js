import React from 'react';
import music from '../../assets/img/Music.jpg';

const About = () => {
    return (
        <section className="music">
            <div className="container music__container">
                <div className="music__left">
                    <img src={music} alt="" />
                </div>
                <div className="music__right about">
                    <div className="about__subtitle subtitle">Обо мне</div>
                    <h2 className="about__title title">Я музыкант</h2>
                    <div className="about__slogan">
                        “У музыки нет возраста и нации”
                    </div>
                    <div className="about__descriptons">
                        Когда мне было 11 лет, я увидел на «MTV», как Курт
                        Кобейн поёт «Heart-Shaped Box», и замер в изумлении.
                        Тогда он мне показался самым красивым человеком в мире.
                        Даже в столь юном возрасте, я почувствовал его грусть.
                    </div>
                    <div className="about__note">
                        <span className="about__note-family">Архипов</span>
                        <span className="about__note-field">
                            - Победитель гремми 2017
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
export { About };
