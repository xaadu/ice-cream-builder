import React from 'react'
import classes from './TotalPrice.module.css'

export default function TotalPrice({ price = 0 }) {
    return (
        <div className={classes.total}>
            <div>Total Price</div>
            <div>{price.toFixed(2)} Tk</div>
        </div>
    )
}
