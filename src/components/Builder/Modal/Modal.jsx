import React from 'react'
import classes from './Modal.module.css'

export default function Modal({ children }) {
    return (
        <div>
            <div className={classes.backdrop} />
            <div className={classes.modalBody}>
                {children}
            </div>
        </div>
    )
}
