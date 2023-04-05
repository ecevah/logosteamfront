import React from 'react';
import styles from '../../styles/Login.module.scss';
import logosLogo from '../../img/logosLogoLight.svg';

export default function Register() {
  return (
    <section className={styles.section}>
        <div className={styles.inclusive}>
            <div>
                <img src={logosLogo} width={115} height={60} alt='logo'></img>
            </div>
            <div className={styles.contentSign}>
                <div className={styles.title}>Kayıt Ol</div>
                <div className={styles.starContentHalf}>
                    <div className={styles.starInclusive}>
                        <div className={styles.starContent}>
                            <div className={styles.blackText}>Ad </div>
                            <div className={styles.starText}>*</div>
                        </div>
                        <input className={styles.input}></input>
                    </div>
                    <div className={styles.starInclusive}>
                        <div className={styles.starContent}>
                            <div className={styles.blackText}>Soyad</div>
                            <div className={styles.starText}>* </div>
                        </div>
                        <input className={styles.input}></input>
                    </div>
                </div>
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
                <div className={styles.ifContent}>
                    <input type='checkbox' className={styles.check}></input>
                    <button className={styles.ifBtn}>Şartları ve koşulları</button>
                    <div className={styles.ifText}>kabul ediyorum.</div>
                </div>
                <button className={styles.button}>Kayıt Ol</button>
                <div className={styles.signContent}>
                    <div className={styles.signText}>Hesabın var mı?</div>
                    <button className={styles.signPurple}>Giriş Yap</button>
                </div>
            </div>
        </div>
    </section>
  )
}
