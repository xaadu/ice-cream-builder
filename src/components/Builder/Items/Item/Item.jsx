import React from 'react'
import classes from './Item.module.css'
import { countBy } from 'lodash'

export default function Item({ name, add, remove, scoops }) {

    const scoopsByCount = countBy(scoops);

    return (
        <li className={classes.item}>
            <span>{name}</span>
            {scoopsByCount[name] ? <span className={classes.quantity}>{scoopsByCount[name]}</span> : ''}
            <div className="right">
                <button type="button" className={[classes.plus, 'rounded'].join(' ')} onClick={add.bind(this, name)}>+</button>
                <button type="button" className={[classes.minus, 'rounded'].join(' ')} onClick={_ => remove(name)}>-</button>
            </div >
        </li >
    )
}
