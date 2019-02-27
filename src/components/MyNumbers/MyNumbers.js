import React from 'react';

const myNumber = [
    { id: 1, name: 'Возраст начала занятий на скрипке', count: 12 },
    { id: 2, name: 'Концертов отыграл', count: 23 },
    { id: 3, name: 'Максимальное число городов в туре', count: 91 },
    { id: 4, name: 'Лет на сцене в качестве скрипача', count: 41 }
];

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
export { MyNumbers };
