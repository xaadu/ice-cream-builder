import React from 'react';
import classes from './Body.module.css';
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder';

export default function Body() {
    return (
        <div className={classes.mainBody}>
            <IceCreamBuilder />
        </div>
    )
}
