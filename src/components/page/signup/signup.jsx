import React from 'react';
import styles from './signup.module.css';
import Header from '../../element/header/header';

const Signup = ({user}) => {

    return (
        <section className={styles.container}>
            <Header />
            <h1 className={styles.signup_text}>Sign UP</h1>
            <form className={styles.signup_Box}></form>
            <input 
                className={styles.input}
                type="text"
                placeholder="Email"
                name="email"
                />
        </section>
    )
}

export default Signup;