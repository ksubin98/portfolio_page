import React, { useRef } from 'react';
import Header from '../../element/header/header';
import Footer from '../../element/footer/footer';
import styles from './login.module.css';

const Login = ({user}) => {
    const inputRef = useRef();

    return (
        <section className={styles.loginBox}>
            <Header />
            <section className={styles.login}>
                <h1 className={styles.title}>L O G I N</h1>
                <section className={styles.login_ser}>
                    <ul className={styles.email_login}>
                        <form className={styles.inputBox}>
                            <li>
                            <input 
                                type="text"
                                className={styles.input}
                                placeholder="Email"
                                name="email"
                            />
                            </li>
                            <li>
                            <input 
                                type="password"
                                className={styles.input}
                                placeholder="Password"
                                name="password"
                            />
                            </li>
                        </form>
                        <button className={styles.loginBtn}>Login</button>
                        <button className={styles.signupBtn}>SignUp</button>
                    </ul>
                    <ul className={styles.sns_login}>
                        <button className={`${styles.list} ${styles.google}`}>Google</button>
                        <button className={`${styles.list} ${styles.facebook}`}>Facebook</button>
                    </ul>
                </section>
            </section>
        <Footer />
        </section>
    )

};

export default Login;