import React from 'react';
import styles from './signup.module.css';
import Header from '../../element/header/header';
import Footer from '../../element/footer/footer';

const Signup = ({user}) => {

    return (
        <section className={styles.container}>
            <Header />
            <section className={styles.signup}>
            <h1 className={styles.signup_text}>Sign UP</h1>
            <section className={styles.singup_ser}>
            <div className={styles.signup_div}>
                <form className={styles.signup_Box}>
                    <input 
                        className={styles.input}
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                    <input 
                        className={styles.input}
                        type="password"
                        placeholder="Passwrod"
                        name="password"
                    />
                </form>
                <button className={styles.signup_btn} name="sinupBtn">SignUp</button>
                <button className={styles.signin}>Go to Login</button>
            </div>
            </section>
            </section>
            <Footer />
        </section>
    )
}

export default Signup;