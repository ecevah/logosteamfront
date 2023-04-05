import React from 'react'
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

import styles from '../../styles/App.module.scss';
import sub from '../../styles/Sub.module.scss';
import layout from '../../styles/Layout.module.scss';

import Button from '../Button/button';

import logosLogoLight from '../../img/logosLogoLight.svg'
import logosLogo from '../../img/logosLogo.svg';
import karalama from '../../img/karalama.svg';
import okan from '../../img/okan.png';
import kerem from '../../img/kerem.png';
import mehmetcan from '../../img/mehmetcan.png';
import ahmet from '../../img/ahmet.png';
import alper from '../../img/alper.png';
import bora from '../../img/bora.png';
import halil from '../../img/halil.png';
import dincer from '../../img/dincer.png';
import samed from '../../img/samed.png';

function Homepage() {
    const [theme, setTheme] = useState(true);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

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
    const arrMember = [
        {
            photo:okan,
            name:'Okan Bursa',
            tag:'Danışman',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. Bölüm Başkan Yardımcısı',
            linkedin:'',
            instagram:'',
            github:'',
            twitter:''
        },
        {
            photo:kerem,
            name:'Nihat Kerem Bora',
            tag:'Ekip Kaptanı',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'',
            instagram:'',
            github:'',
            twitter:''
        },
        {
            photo:mehmetcan,
            name:'Mehmetcan Sevinçli',
            tag:'Ruh Sağlığı Profesyoneli',
            title:'Hacettepe Üniversitesi Doktora Sosyal Psikoloji',
            linkedin:'',
            instagram:'',
            github:'',
            twitter:''
        },
        {
            photo:ahmet,
            name:'Ahmet Ecevit',
            tag:'Full Stack Developer',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'https://www.linkedin.com/in/ahmet-ecevit/',
            instagram:'https://www.instagram.com/eecevah/',
            github:'https://github.com/ecevah',
            twitter:'https://twitter.com/ecevah'
        },
        {
            photo:alper,
            name:'Ali Alper Şahin',
            tag:'Backend Developer',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'',
            instagram:'',
            github:'',
            twitter:''
        },
        {
            photo: bora,
            name:'Bora Körpe',
            tag:'Flutter Developer',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'',
            instagram:'',
            github:'',
            twitter:''
        },
        {
            photo:halil,
            name:'Halil İbrahim Hatun',
            tag:'Ai Developer',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'',
            instagram:'',
            github:'',
            twitter:''
        },
        {
            photo:dincer,
            name:'Dinçer Kaan Turnalı',
            tag:'Ai Developer',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'',
            instagram:'',
            github:'',
            twitter:''
        },
        {
            photo:samed,
            name:'Samed Karakuş',
            tag:'UI/UX Desinger',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 2. Sınıf',
            linkedin:'',
            instagram:'',
            github:'',
            twitter:''
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
            <section className={`${sub.memberSection} ${layout.container}`}>
                <div className={theme ? sub.lightmemberTitle : sub.memberTitle}>Ekip Üyelerimiz</div>
                <div className={sub.subStatic}>
                    <img className={sub.subKaralama} src={karalama} alt='karalama' height={40} width={304}></img>
                </div>
                <div className='container'>
                    <div className="row row-cols-lg-3 row-cols-1">
                        {arrMember.map((item)=>
                            <div className={theme ? `col ${sub.lightmember}` :`col ${sub.member}`}>
                                <div>
                                    <img src={item.photo} alt={item.name} className={sub.image}></img>
                                </div>
                                <div className={sub.memberName}>{item.name}</div>
                                <div className={sub.memberName}>{item.tag} </div>
                                <div className={sub.memberText}>{item.title}</div>
                                <div>
                                    <a className={item.linkedin===''? sub.none : null} target="_blank" rel="noopener noreferrer" href={item.linkedin}>
                                        <i className={`ri-linkedin-fill ${sub.icon}`}></i>
                                    </a>
                                    <a className={item.instagram===''? sub.none : null} target="_blank" rel="noopener noreferrer" href={item.instagram}>
                                        <i className={`ri-instagram-line ${sub.icon}`}></i>
                                    </a>
                                    <a className={item.github===''? sub.none : null} target="_blank" rel="noopener noreferrer" href={item.github}>
                                        <i className={`ri-github-fill ${sub.icon}`}></i>
                                    </a>
                                    <a className={item.twitter===''? sub.none : null} target="_blank" rel="noopener noreferrer" href={item.twitter}>
                                        <i className={`ri-twitter-fill ${sub.icon}`}></i>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
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