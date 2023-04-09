import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import styles from '../../styles/App.module.scss';
import sub from '../../styles/Sub.module.scss';
import layout from '../../styles/Layout.module.scss';

import Button from '../Button/button';

import logosLogoLight from '../../img/logosLogoLight.svg'
import logosLogo from '../../img/logosLogo.svg';
import karalama from '../../img/karalama.svg';

function Homepage(props) {
    const [theme, setTheme] = useState(true);
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    const arr = [
        {
            text:'Nasıl Çalışır',
            link:'/howto'
        },
        {
            text:'Hakkımızda',
            link:'/about'
        },
        {
            text:'Takım Üyeleri',
            link:'/members'
        },
        {
            text:'İletişim',
            link:'/contact'
        }
    ]

    const arrlogos = [
        {
            text:'Hakkımızda',
            href:'/about'
        },
        {
            text:'Misyon&Vizyon',
            href:'/misyon'
        },
        {
            text:'Ekip Üyelerimiz',
            href:'/members'
        },
        {
            text:'Projemiz',
            href:'/howto'
        },
        {
            text:'KVKK',
            href:'/kvkk'
        }
    ]

    const arrBlog = [
        {
            text:'Medium',
            href:''
        }
    ]

    const arrSocial = [
        {
            text:'Linkedin',
            href:'https://www.linkedin.com/company/logos-team/'
        },
        {
            text:'Twitter',
            href:''
        },
        {
            text:'Instagram',
            href:'https://www.instagram.com/logos_team2023/'
        },
        {
            text:'YouTube',
            href:''
        },
    ]
    const arrIcon = [
        {
            icon:'ri-instagram-line',
            href:'https://www.linkedin.com/company/logos-team/'
        },
        {
            icon:'ri-linkedin-fill',
            href:'https://www.linkedin.com/company/logos-team/'
        },
        {
            icon:'ri-twitter-fill',
            href:''
        },
        {
            icon:'ri-medium-fill',
            href:''
        },
        {
            icon:'ri-youtube-fill',
            href:''
        }
    ]

    const arrPage = [
        {
            ref:'about',
            title:'about',
            text:'asdnlaskdaslkdaksd'
        },
        {
            ref:'howto',
            title:'howto',
            text:'asldsadmsaşdasidş'
        },
        {
            ref:'misyon',
            title:'misyon',
            text:'asdlkasdjalsşdlaisd'
        },
        {
            ref:'kvkk',
            title:'kvkk',
            text:''
        }
    ]
  return (
    <>
        <section className={open ? theme ? styles.hamburgerBg : styles.lighthamburgerBg : theme ? styles.headers : styles.lightHeaders}>
            <div className={ theme ? open ? styles.headerFixed : null : open ? styles.lightheaderFixed : null } >
                <section className={`${layout.container} ${styles.headersDiv}`}>
                    <button onClick={()=> navigate("")}><img src={theme ? logosLogo : logosLogoLight} alt='logo' className={styles.logosImage}/></button>
                    <div className={styles.headerLink}>
                    {arr.map((item)=>
                        <button className={theme ? styles.headerLinkItem : styles.lightheaderLinkItem} onClick={()=> navigate(item.link)}>{item.text}</button>
                    )}
                    </div>
                    <div className={styles.btnHeaderDiv}>
                        <button onClick={()=>navigate("/login")} className={styles.headerLinkItem}>Giriş Yap</button>
                        <button onClick={()=>navigate("/signup")}><Button type='primary' text='Kayıt Ol'/></button>
                        {theme ? <button onClick={()=>setTheme(!theme)} className={styles.themeBtn}><i className={`ri-sun-line ${styles.dark}`}></i></button> : <button onClick={()=>setTheme(!theme)}><i className={`ri-moon-line ${styles.light}`}></i></button>}
                    </div>
                    <div className={styles.mobileBtnDiv}>
                        {theme ? <button onClick={()=>setTheme(!theme)} className={styles.themeBtn}><i className={`ri-sun-line ${styles.dark}`}></i></button> : <button onClick={()=>setTheme(!theme)}><i className={`ri-moon-line ${open ? styles.openlight : styles.light}`}></i></button>}
                        <button className={styles.mobileBtn} onClick={()=>setOpen(!open)}>
                            {open ? <i className={`ri-close-line ${theme ? styles.hamburgerMenu : styles.lighthamburgerMenu}`}></i> : <i className={`ri-menu-line ${theme ? styles.hamburgerMenu : styles.lighthamburgerMenu}`}></i>}
                        </button>
                    </div>
                </section>
            </div>
            <section className={open ? theme ? styles.dropdownMenu : styles.lightdropdownMenu : styles.dropdownMenuNone}>
                <div className={styles.dropdownInclusive}>
                    <div className={styles.dropdownContent}>
                        {arr.map((item)=>
                            <button onClick={()=> navigate(item.link)} className={theme ? styles.headerLinkItemHamburger : styles.lightheaderLinkItemHamburger} href={item.link}>{item.text}</button>
                        )}
                    </div>
                    <div className={styles.dropdawnBtn}>
                        <button onClick={()=> navigate("/login")}><Button type='second' text='Giriş Yap' theme={theme ? null:'light'}/></button>
                        <button onClick={()=> navigate("/signup")}><Button type='primary' text='Kayıt Ol'/></button>
                    </div>
                </div>
            </section>
            {arrPage.map((item)=>
                {
                    if(item.ref===props.type){
                        return(
                        <section className={`${sub.subSection} ${layout.container}`}>
                            <div className={theme ? sub.subTitle : sub.lightsubTitle}>{item.title}</div>
                            <div className={sub.subStatic}>
                                <img className={sub.subKaralama} src={karalama} alt='karalama' height={40} width={304}></img>
                            </div>
                            <p className={theme ? sub.subText : sub.lightsubText}>{item.text}</p>
                        </section>
                        )
                    }
                    return null;
                }
            )}
        </section>
        <section className={theme ? styles.section : styles.lightsectionfooter}>
            <div className={layout.container}>
                <div className={styles.footerSection}>
                    <div className={styles.footerInclusive}>
                        <div className={styles.footerLogoDiv}>
                            <div>
                                <img src={theme ? logosLogo : logosLogoLight} alt='logos' width={157.56} height={79.32} />
                            </div>
                            <div className={theme ? styles.footerLogoTitle : styles.lightfooterLogoTitle}>İletişim</div>
                            <div className={theme ? styles.footerLogoText : styles.lightfooterLogoText}>contact@logos.com.tr</div>
                        </div>
                        <div className={styles.footerContent}>
                            <div className={theme ? styles.footerItemContent : styles.lightfooterItemContent}>
                                <div className={styles.footerItemTitle}>Logos</div>
                                {arrlogos.map((item)=>
                                    <button onClick={()=> navigate(item.href)} className={styles.footerItemText}>{item.text}</button>
                                )}
                            </div>
                            <div className={theme ? styles.footerItemContent : styles.lightfooterItemContent}>
                                <div className={styles.footerItemTitle}>Blog</div>
                                {arrBlog.map((item)=>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer"className={styles.footerItemText}>{item.text}</a>
                                )}
                            </div>
                            <div className={theme ? styles.footerItemContent : styles.lightfooterItemContent}>
                                <div className={styles.footerItemTitle}>Sosyal Medya</div>
                                {arrSocial.map((item)=>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.footerItemText}>{item.text}</a>
                                )}
                            </div>
                            <div className={theme ? styles.footerSocial : styles.lightfooterSocial}>
                            <div className={styles.footerSocialTitle}>Social</div>
                            <div className={styles.footerSocialCardDiv}>
                                {arrIcon.map((item)=>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                                        <i className={`${item.icon} ${styles.icon}`}></i>
                                    </a>
                                )}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className={theme ? styles.copyright : styles.lightcopyright}>
                        Copyright © 2023 Logos
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Homepage;