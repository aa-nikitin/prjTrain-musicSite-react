import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

const socials = [
    { icon: 'linkedin', link: '#' },
    { icon: 'github-alt', link: '#' },
    { icon: 'tumblr', link: '#' },
    { icon: 'vk', link: '#' }
];

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

const myNumber = [
    { id: 1, name: 'Возраст начала занятий на скрипке', count: 12 },
    { id: 2, name: 'Концертов отыграл', count: 23 },
    { id: 3, name: 'Максимальное число городов в туре', count: 91 },
    { id: 4, name: 'Лет на сцене в качестве скрипача', count: 41 }
];

class DataProvider extends Component {
    setValueProvider = () => {
        return { socials, products, myNumber };
    };
    render() {
        const { children } = this.props;

        return <Provider value={this.setValueProvider()}>{children}</Provider>;
    }
}

const withData = WrapperComponent => {
    return class extends Component {
        render() {
            return (
                <Consumer>
                    {ConsumerProps => (
                        <WrapperComponent {...ConsumerProps} {...this.props} />
                    )}
                </Consumer>
            );
        }
    };
};

export { DataProvider, withData };
