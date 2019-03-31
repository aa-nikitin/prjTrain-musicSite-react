import React, { PureComponent } from 'react';
import { getQuery } from '../api';

const { Provider, Consumer } = React.createContext();

const socials = [
    { icon: 'linkedin', link: '#' },
    { icon: 'github-alt', link: '#' },
    { icon: 'tumblr', link: '#' },
    { icon: 'vk', link: '#' }
];

// const myNumber = [
//     { id: 1, name: 'Возраст начала занятий на скрипке', count: 12 },
//     { id: 2, name: 'Концертов отыграл', count: 23 },
//     { id: 3, name: 'Максимальное число городов в туре', count: 91 },
//     { id: 4, name: 'Лет на сцене в качестве скрипача', count: 41 }
// ];

class DataProvider extends PureComponent {
    state = { products: [], counters: [] };
    loadProducts = () => {
        getQuery('getProducts')
            .then(prosucts => {
                this.setState({ products: prosucts.data });
            })
            .catch(error => {
                console.log(error);
            });
    };
    loadCounters = () => {
        getQuery('getCounters')
            .then(counters => {
                this.setState({ counters: counters.data });
            })
            .catch(error => {
                console.log(error);
            });
    };
    componentDidMount() {
        this.loadCounters();
        this.loadProducts();
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log('shouldComponentUpdate(nextProps, nextState)');
    //     // console.log(nextState, nextProps);
    //     // console.log('----');
    //     if (
    //         nextState.products.length === 0 ||
    //         nextState.counters.length === 0
    //     ) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    updateProducts = () => {
        this.loadProducts();
    };
    updateCount = () => {
        this.loadCounters();
    };
    setValueProvider = () => {
        const { products, counters } = this.state;
        return {
            socials,
            products,
            counters,
            updateProducts: this.updateProducts,
            updateCount: this.updateCount,
            loadCounters: this.loadCounters
        };
    };

    render() {
        const { children } = this.props;

        return <Provider value={this.setValueProvider()}>{children}</Provider>;
    }
}

const withData = WrapperComponent => {
    return class extends PureComponent {
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
