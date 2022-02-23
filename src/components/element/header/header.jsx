import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {

    return (
        <header className={styles.header}>
            {
                onLogout && (
                    <button className={styles.logout}>Logout</button>
                )
            }
            <h1 className={styles.title}>Portfolio</h1>
        </header>
    )
};

export default Header;