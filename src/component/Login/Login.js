import React, { useEffect, useState } from 'react';
import styles from '../../styles/Login.module.scss';
import logosLogo from '../../img/logosLogoLight.svg';
import axios from '../../api/axios.js'

export default function Login() {
    const [users, setUsers] = useState();

  return (
    <section className={styles.section}>
        <div className={styles.inclusive}>
            <div>
                <img src={logosLogo} width={115} height={60} alt='logo'></img>
            </div>
            <form className={styles.content}>
                <div className={styles.title}>Giriş Yap</div>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Mail Adresi </div>
                    <div className={styles.starText}>*</div>
                </div>
                <input type='text' className={styles.input}></input>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Şifre</div>
                    <div className={styles.starText}>* </div>
                </div>
                <input type='password' className={styles.input}></input>
                <button className={styles.forgot}>Şifreni mi unuttun?</button>
                <button className={styles.button}>Giriş Yap</button>
                <div className={styles.signContent}>
                    <div className={styles.signText}>Hesabın yok mu?</div>
                    <button className={styles.signPurple}>Kayıt Ol</button>
                </div>
            </form>
        </div>
    </section>
  )
}
