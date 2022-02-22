import React, { useRef } from 'react';
import styles from './login.module.css';

const Login = ({user}) => {
    const inputRef = useRef();

    return (
        <section className={styles.loginBox}>

            <section className={styles.login}>
                <h1 className={styles.title}>Login</h1>
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
                            <button className={styles.loginBtn}>Login</button>
                            </li>
                        </form>
                        <div className={styles.signup}>
                            
                        </div>
                    </ul>
                </section>
            </section>

        </section>
    )

};

export default Login;