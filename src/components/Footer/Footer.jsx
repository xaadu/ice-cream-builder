import React from 'react';
import classes from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={["container", classes.container].join(' ')}>
                <div>
                    Copyright &copy;2020.
                </div>
                <div className="textRight">
                    Built with <span className="red">&hearts;</span> by
                    <a href="https://zayedabdullah.com/">Xayed</a>
                </div>
            </div>
        </footer>
    )
}
