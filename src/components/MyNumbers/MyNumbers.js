import React from 'react';

const MyNumbers = () => {
    return (
        <section className="life">
            <div className="container life__container">
                <h2 className="life__title">Несколько чисел моей жизни</h2>
                <div className="life__slogan">
                    У музыки нет возраста и нации, <br />
                    однажды мы уйдём, а она останется.
                </div>
                <ul className="life__skills">
                    <li className="life__skill">
                        <div className="life__skill-number">12</div>
                        <div className="life__skill-text">
                            Возраст начала занятий на скрипке
                        </div>
                    </li>
                    <li className="life__skill">
                        <div className="life__skill-number">23</div>
                        <div className="life__skill-text">
                            Концертов отыграл
                        </div>
                    </li>
                    <li className="life__skill">
                        <div className="life__skill-number">91</div>
                        <div className="life__skill-text">
                            Максимальное число городов в туре
                        </div>
                    </li>
                    <li className="life__skill">
                        <div className="life__skill-number">41</div>
                        <div className="life__skill-text">
                            Лет на сцене в качестве скрипача
                        </div>
                    </li>
                </ul>
                <a className="life__link" href="http://">
                    Читать историю
                </a>
            </div>
        </section>
    );
};
export { MyNumbers };
