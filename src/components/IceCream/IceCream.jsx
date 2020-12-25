import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

export default function IceCream() {
    return (
        <div>
            <div>
                <div className={classes.icecream}>
                    <p className={classes.cone}></p>
                    {/* <p>Please start adding scoops</p> */}
                    <Scoop />
                    <div className={classes.cherry}></div>
                </div>
            </div>
        </div>
    )
}
