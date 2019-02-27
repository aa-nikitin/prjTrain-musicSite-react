import React from 'react';
import productPhoto from '../../assets/img/products/Work1.jpg';

const products = [
    { id: 1, name: 'Вино вдохновение', price: 100 },
    { id: 2, name: 'Вино вдохновение', price: 200 },
    { id: 3, name: 'Вино вдохновение', price: 300 },
    { id: 4, name: 'Вино вдохновение', price: 400 },
    { id: 5, name: 'Вино вдохновение', price: 500 },
    { id: 6, name: 'Вино вдохновение', price: 600 },
    { id: 7, name: 'Вино вдохновение', price: 700 },
    { id: 8, name: 'Вино вдохновение', price: 800 },
    { id: 9, name: 'Вино вдохновение', price: 900 }
];

const Products = () => {
    return (
        <section className="product">
            <div className="container">
                <div className="product__subtitle subtitle">
                    Товары от студии Архипова
                </div>
                <h2 className="product__title title">Мой личный бренд</h2>
                <ul className="product__list">
                    {products.map(item => (
                        <li key={item.id} className="product__item">
                            <img
                                className="product__img"
                                src={productPhoto}
                                alt=""
                            />
                            <div className="product__hover">
                                <div className="product__description">
                                    <div className="product__name">
                                        {item.name}
                                    </div>
                                    <div className="product__price">
                                        $ {item.price}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
export { Products };
