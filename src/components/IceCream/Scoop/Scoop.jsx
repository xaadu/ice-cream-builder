import React from 'react';
import classes from './Scoop.module.css';

export default function Scoop({ flavor }) {
    return (
        <div className={[classes.scoop, classes[flavor]].join(' ')}></div>
    )
}
