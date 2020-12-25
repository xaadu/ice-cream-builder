import React from 'react'
import Item from './Item/Item'

export default function Items({ items, add, remove, scoops }) {

    const flavors = Object.keys(items);

    return (
        <div>
            <ul>
                {flavors.map((flavor, index) => <Item key={index} name={flavor} add={add} remove={remove} scoops={scoops} />)}
            </ul>
        </div>
    )
}
