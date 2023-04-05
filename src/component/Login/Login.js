import React from 'react';
import styles from '../../styles/Login.module.scss';
import logosLogo from '../../img/logosLogoLight.svg';

export default function Login() {
  return (
    <section className={styles.section}>
        <div className={styles.inclusive}>
            <div>
                <img src={logosLogo} width={115} height={60} alt='logo'></img>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>Giriş Yap</div>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Mail Adresi </div>
                    <div className={styles.starText}>*</div>
                </div>
                <input className={styles.input}></input>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Şifre</div>
                    <div className={styles.starText}>* </div>
                </div>
                <input className={styles.input}></input>
                <button className={styles.forgot}>Şifreni mi unuttun?</button>
                <button className={styles.button}>Giriş Yap</button>
                <div className={styles.signContent}>
                    <div className={styles.signText}>Hesabın yok mu?</div>
                    <button className={styles.signPurple}>Kayıt Ol</button>
                </div>
            </div>
        </div>
    </section>
  )
}
