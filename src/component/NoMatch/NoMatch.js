import React from 'react'
import {useNavigate} from 'react-router-dom';
import logosLogoLight from '../../img/logosLogoLight.svg';
import styles from '../../styles/NoMatch.module.scss';

export default function NoMatch(props){
  const navigate = useNavigate();
  return (
    <>
        <section className={styles.section404}>
            <button onClick={()=> navigate("/")}>
                <img src={logosLogoLight} alt='Logo' height={200} width={500} className={styles.img}></img>
            </button>
            <div className={styles.title404}>404</div>
            <div className={styles.text404}>Sayfa Bulunamadı</div>
        </section>
    </>
  )
}
