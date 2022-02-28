import React from 'react';
import Footer from '../../element/footer/footer';
import Header from '../../element/header/header';
import styles from './userInformation.module.css';

const UserInformation = (props) => {

    return (
        <section className={styles.user}>
            <Header />
            <section className={styles.userBox}>
                <h1 className={styles.userText}>USER INFORMATION</h1>
                <section className={styles.user_input}>
                    <form className={styles.inputBox}>
                    <label className={styles.input}>NAME </label>
                        <input 
                            type="text"
                            className={styles.input}
                            placeholder="User Name"
                            name="Name"
                            />
                    <label className={styles.input}>BirthDay </label>
                        <input 
                            type="text"
                            className={styles.input}
                            placeholder="User BirthDay"
                            name="birthday"
                            />
                    <label className={styles.input}>Email </label>
                        <input 
                            type="text"
                            className={styles.input}
                            placeholder="User Email"
                            name="email"
                            />
                    <label className={styles.input}>Phone Number </label>
                        <input 
                            type="text"
                            className={styles.input}
                            placeholder="User Phone Number"
                            name="phoneNumber"
                            />
                    </form>
                </section>
            </section>
            <Footer />
        </section>
    )
}

export default UserInformation;