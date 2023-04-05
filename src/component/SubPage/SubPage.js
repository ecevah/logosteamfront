import React from 'react'
import { useState } from "react";

import styles from '../../styles/App.module.scss';
import sub from '../../styles/Sub.module.scss';
import layout from '../../styles/Layout.module.scss';

import Button from '../Button/button';

import logosLogoLight from '../../img/logosLogoLight.svg'
import logosLogo from '../../img/logosLogo.svg';
import karalama from '../../img/karalama.svg';

function Homepage() {
    const [theme, setTheme] = useState(true);
    const [open, setOpen] = useState(false)

    const arr = [
        {
            text:'Nasıl Çalışır',
            link:''
        },
        {
            text:'Hakkımızda',
            link:''
        },
        {
            text:'Sponsorlar',
            link:''
        },
        {
            text:'İletişim',
            link:''
        }
    ]

    const arrlogos = [
        {
            text:'Hakkımızda',
            href:''
        },
        {
            text:'Misyon&Vizyon',
            href:''
        },
        {
            text:'Ekip Üyelerimiz',
            href:''
        },
        {
            text:'Projemiz',
            href:''
        },
        {
            text:'KVKK',
            href:''
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
            href:''
        },
        {
            text:'Twitter',
            href:''
        },
        {
            text:'Instagram',
            href:''
        },
        {
            text:'YouTube',
            href:''
        },
    ]
    const arrIcon = [
        {
            icon:'ri-instagram-line',
            href:''
        },
        {
            icon:'ri-linkedin-fill',
            href:''
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

  return (
    <>
        <section className={open ? theme ? styles.hamburgerBg : styles.lighthamburgerBg : theme ? styles.headers : styles.lightHeaders}>
            <div className={ theme ? open ? styles.headerFixed : null : open ? styles.lightheaderFixed : null } >
                <section className={`${layout.container} ${styles.headersDiv}`}>
                    <img src={theme ? logosLogo : logosLogoLight} alt='logo' className={styles.logosImage}/>
                    <div className={styles.headerLink}>
                    {arr.map((item)=>
                        <a className={theme ? styles.headerLinkItem : styles.lightheaderLinkItem} href={item.link}>{item.text}</a>
                    )}
                    </div>
                    <div className={styles.btnHeaderDiv}>
                        <button className={styles.headerLinkItem}>Giriş Yap</button>
                        <Button type='primary' text='Kayıt Ol'/>
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
                            <a className={theme ? styles.headerLinkItemHamburger : styles.lightheaderLinkItemHamburger} href={item.link}>{item.text}</a>
                        )}
                    </div>
                    <div className={styles.dropdawnBtn}>
                        <Button type='second' text='Giriş Yap' theme={theme ? null:'light'}/>
                        <Button type='primary' text='Kayıt Ol'/>
                    </div>
                </div>
            </section>
            <section className={`${sub.subSection} ${layout.container}`}>
                <div className={sub.subTitle}>Lorem ipsum dolor sit amet</div>
                <div className={sub.subStatic}>
                    <img className={sub.subKaralama} src={karalama} alt='karalama' height={40} width={304}></img>
                </div>
                <p className={sub.subText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum vel orci in porttitor. Praesent et metus non arcu hendrerit blandit. Integer cursus dui sit amet tempor mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eleifend neque pulvinar, luctus ipsum id, ornare nunc. Aliquam blandit in risus in vehicula. Cras sed erat bibendum, pharetra felis at, vestibulum felis. Mauris feugiat scelerisque ante, id vulputate enim ullamcorper quis. Morbi ac faucibus felis. Duis vitae tellus semper, blandit libero et, faucibus ligula. Nulla et malesuada odio. Aliquam nec purus scelerisque augue mattis lobortis efficitur vel ex. Phasellus sit amet turpis nunc. Nullam pretium, ante non sollicitudin aliquet, mauris ligula pharetra justo, id tincidunt libero tortor sit amet metus. Nulla tristique est lacus, ut euismod elit consequat at. Vivamus pharetra a urna et venenatis. Nullam dolor arcu, interdum at malesuada eu, ornare id lectus. Pellentesque et ante imperdiet libero tempus molestie. Nulla consectetur commodo libero at volutpat. Mauris id dui at arcu sagittis ornare. Suspendisse pellentesque elit at dolor ultrices, sed eleifend justo tristique. Quisque ex est, rutrum non pellentesque sed, commodo ut lacus. Etiam nec pharetra purus. Curabitur ullamcorper lacus erat, nec iaculis neque varius vel.</p>
            </section>
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
                                    <a href={item.href} className={styles.footerItemText}>{item.text}</a>
                                )}
                            </div>
                            <div className={theme ? styles.footerItemContent : styles.lightfooterItemContent}>
                                <div className={styles.footerItemTitle}>Blog</div>
                                {arrBlog.map((item)=>
                                    <a href={item.href} className={styles.footerItemText}>{item.text}</a>
                                )}
                            </div>
                            <div className={theme ? styles.footerItemContent : styles.lightfooterItemContent}>
                                <div className={styles.footerItemTitle}>Sosyal Medya</div>
                                {arrSocial.map((item)=>
                                    <a href={item.href} className={styles.footerItemText}>{item.text}</a>
                                )}
                            </div>
                            <div className={theme ? styles.footerSocial : styles.lightfooterSocial}>
                            <div className={styles.footerSocialTitle}>Social</div>
                            <div className={styles.footerSocialCardDiv}>
                                {arrIcon.map((item)=>
                                    <div className={styles.socialCard}>
                                        <i className={`${item.icon} ${styles.icon}`}></i>
                                    </div>
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