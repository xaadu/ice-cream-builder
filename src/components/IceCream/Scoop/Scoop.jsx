import React from 'react';
import classes from './Scoop.module.css';

export default function Scoop() {
    return (
        <div className={[classes.scoop, classes.orange].join(' ')}></div>
    )
}
