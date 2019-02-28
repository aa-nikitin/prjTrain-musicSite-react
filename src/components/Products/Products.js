import React from 'react';
import productPhoto from '../../assets/img/products/Work1.jpg';
import { withData } from '../../context/';

const ForProducts = ({ products }) => {
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

const Products = withData(ForProducts);

export { Products };
