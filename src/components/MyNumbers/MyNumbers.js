import React from 'react';
import { withData } from '../../context/';

const ForMyNumbers = ({ myNumber }) => {
    return (
        <section className="life">
            <div className="container life__container">
                <h2 className="life__title">Несколько чисел моей жизни</h2>
                <div className="life__slogan">
                    У музыки нет возраста и нации, <br />
                    однажды мы уйдём, а она останется.
                </div>
                <ul className="life__skills">
                    {myNumber.map(item => (
                        <li key={item.id} className="life__skill">
                            <div className="life__skill-number">
                                {item.count}
                            </div>
                            <div className="life__skill-text">{item.name}</div>
                        </li>
                    ))}
                </ul>
                <a className="life__link" href="http://">
                    Читать историю
                </a>
            </div>
        </section>
    );
};

const MyNumbers = withData(ForMyNumbers);

export { MyNumbers };
