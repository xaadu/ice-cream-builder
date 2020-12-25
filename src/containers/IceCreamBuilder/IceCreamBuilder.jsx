import React, { Component } from 'react'
import classes from './IceCreamBuilder.module.css'

import IceCream from '../../components/IceCream/IceCream'
import Builder from '../../components/Builder/Builder'

export default class IceCreamBuilder extends Component {

    state = {
        items: {},
        scoops: [],
        totalPrice: 0
    }

    componentDidMount() {
        fetch('https://icecream-builder-ef069-default-rtdb.firebaseio.com/items.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ items: data });
            });
    }

    addScoop = scoop => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);

        const price = items[scoop];

        this.setState(prevState => ({ scoops: workingScoops, totalPrice: prevState.totalPrice + price }));
    }
    removeScoop = scoop => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.splice(workingScoops.findIndex(sc => sc === scoop), 1);

        const price = items[scoop];

        this.setState(prevState => ({ scoops: workingScoops, totalPrice: prevState.totalPrice - price }));
    }

    render() {

        const { items, scoops, totalPrice } = this.state;

        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoops={scoops} />
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={scoops}
                />
            </div>
        )
    }
}
