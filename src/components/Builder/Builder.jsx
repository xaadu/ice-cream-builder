import React from 'react'
import classes from './Builder.module.css'

import Items from './Items/Items'
import TotalPrice from './TotalPrice/TotalPrice'
import Modal from './Modal/Modal'

export default function Builder({ items, price, add, remove, scoops }) {
    return (
        <div className={classes.builder}>
            <h3>Build your own Ice Cream Sundae</h3>
            <Items items={items} add={add} remove={remove} scoops={scoops} />
            <TotalPrice price={price} />
            <button type="button" className={[classes.order, 'rounded'].join(' ')}>
                Add to Cart
            </button>
            <Modal>
                Hello From Modal
            </Modal>
        </div>
    )
}
