import React from 'react'
import { useState } from "react";

import styles from '../../styles/App.module.scss';
import layout from '../../styles/Layout.module.scss';

import Button from '../Button/button';

import logosLogoLight from '../../img/logosLogoLight.svg'
import logosLogo from '../../img/logosLogo.svg';
import first from '../../img/appFirst.png';
import mimar from '../../img/mimarSinanLogo.svg';
import muhendishane from '../../img/mühendishane.svg';
import mimarLight from '../../img/mimarLight.svg';
import muhendishaneLight from '../../img/muhendishaneLight.svg';
import teknofest from '../../img/teknofestLogo.svg';
import teknoloji from '../../img/teknolojiTakım.svg';
import teknolojiLight from '../../img/teknolojiLight.svg';
import kyk from '../../img/kyk.svg';
import kasnak from '../../img/kasnak.svg';
import doc from '../../img/doc.svg';
import wifi from '../../img/wifi.svg';
import karalama from '../../img/karalama.svg';
import second from '../../img/second.png';
import third from '../../img/third.png';
import secure from '../../img/secure.svg';
import logoPhone from '../../img/logoPhone.png';
import phone from '../../img/phone.png';
import bg from '../../img/lastBG.svg';

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
    const arrSponsor = [
        {
            alt:'mimar',
            item: mimar,
            light: mimarLight
        },
        {
            alt:'muhendishane',
            item: muhendishane,
            light: muhendishaneLight
        },
        {
            alt:'teknofest',
            item:teknofest,
            light: teknofest
        },
        {
            alt:'teknoloji',
            item:teknoloji,
            light: teknolojiLight
        },
        {
            alt:'kyk',
            item:kyk,
            light: kyk
        }
    ]
    const arrCard = [
        {
            img:kasnak,
            title:'Kolay Arayüz',
            text:'Uygulama veya web sitesi gibi bir dijital ortamla etkileşim kurmasını sağlayan bir tasarım özelliği.',
            alt:'kasnak'
        },
        {
            img:wifi,
            title:'Online Birebir İletişim',
            text:'Birebir iletişim, iletişimdeki engelleri azaltır ve daha anlamlı ve verimli bir iletişim sağlar.',
            alt:'wifi'
        },
        {
            img:doc,
            title:'Tek Yerde Yönet',
            text:'Birebir iletişim, iletişimdeki engelleri azaltır ve daha anlamlı ve verimli bir iletişim sağlar.',
            alt:'doc'
        }
    ]
    const arrUI = [
        {
            alt: 'logoPhone',
            img:logoPhone,
            number:'1',
            title:'Hesap Oluştur',
            text: 'Bu işlem, kullanıcılara web sitesine veya platforma erişmesi için yapması gereklidir.'
        },
        {
            alt: 'phone',
            img:phone,
            number:'2',
            title:'Profili doldur',
            text: 'Diğer kullanıcılarla etkileşim kurarken daha doğru ve kapsamlı bir profil sunabilirler.'
        },
        {
            alt: 'phone2',
            img:phone,
            number:'3',
            title:'Uygun doktor ile görüş.',
            text: 'Birçok kişinin sağlık sorunlarına yönelik çözüm aradıklarında tercih ettikleri bir yöntemdir'
        }
    ]  
    const arrFaq = [
        {
            title1:'Lorem Impus',
            text1: 'Lorem Impus',
            title2: 'Lorem Impus',
            text2: 'Lorem Impus'
        },
        {
            title1:'Lorem Impus',
            text1: 'Lorem Impus',
            title2: 'Lorem Impus',
            text2: 'Lorem Impus'
        },
        {
            title1:'Lorem Impus',
            text1: 'Lorem Impus',
            title2: 'Lorem Impus',
            text2: 'Lorem Impus'
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
                            {open ? <i className={`ri-close-line ${theme ? styles.hamburgerMenu : styles.lighthamburgerMenu}`}></i> : <i className={`ri-menu-line ${styles.hamburgerMenu}`}></i>}
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
            <div className={`${styles.firstCard} ${layout.container}`}>
                <div className={styles.firstCardDiv}>
                    <div className={theme ? styles.firstCardTitle : styles.lightfirstCardTitle}>Psikolojini harika bir şekilde tut ve iyileş.</div>
                    <div className={theme ? styles.firstCardText : styles.lightfirstCardText}>Elde edeceğiniz özellikler, ruh sağlığınızı korumanıza ve geliştirmenize yardımcı olacak şekilde tasarlanmıştır.</div>
                    <div className={styles.firstCardBtnDiv}>
                        <Button type='primary' text='Detaylar'/>
                        <div className={styles.null}></div>
                        <Button type='second' text='İncele' theme={theme ? null:'light'}/>
                    </div>
                </div>
                <div className={styles.firstImageDiv}>
                    <img src={first} alt='first' className={styles.firstImage}></img>
                </div>
            </div>
            <section className={theme ? styles.sponsorSection : styles.lightsponsorSection}>
                <div className={theme ? `${styles.sponsorDiv} ${layout.container}` : `${styles.lightsponsorDiv} ${layout.container}`}>
                    <div className={theme ? styles.sponsorTitle : styles.lightsponsorTitle}>Önde gelen sponsorlar</div>
                        <div className={styles.sponsorImg}>
                            {arrSponsor.map((item)=>
                                <div>
                                    <img src={theme ? item.item : item.light} alt={item.alt} height='83px'></img>
                                </div>
                            )}
                        </div>
                    </div>
            </section>
        </section> 
        <section className={theme ? styles.section : styles.lightsection}>
            <div className={styles.cardCizgi}>
                <div className={theme ? styles.cardCizgiTitle : styles.lightcardCizgiTitle}>Günlük ruh halinize yardımcı olacak en iyi özelliklere sahip olacaksınız.</div>
                <div className={theme ? styles.cardCizgiText : styles.lightcardCizgiText}>Günlük yaşamın zorluklarıyla başa çıkmak, stresli işler ve yoğun programlar, insanların ruh halini olumsuz etkileyebilir. Ancak, birçok farklı yöntemle günlük ruh halimizi kontrol etmek mümkündür.</div>
            </div>
            <div className={styles.cardStatic}>
                <img className={styles.cardKaralama} src={karalama} alt='karalama' height={40} width={304}></img>
            </div>
            <div className={theme ? styles.cardCardDiv : styles.lightcardCardDiv}>
                {arrCard.map((item)=>
                    <div className={styles.cardCard}>
                        <img src={item.img} alt={item.alt} height={50} width={50}></img>
                        <div className={styles.cardCardTitle}>{item.title}</div>
                        <div className={styles.cardCardText}>{item.text}</div>
                    </div>
                )}
            </div>
        </section>
        <section className={theme ? styles.section : styles.lightsection}>
            <div className={theme ? `${styles.cardSecondDiv} ${layout.container}` : `${styles.lightcardSecondDiv} ${layout.container}`}>
                <div className={styles.cardSecondContent}>
                    <div className={styles.cardSecondTitle}>Tüm randevularınızı verimli bir şekilde tek bir yerde yönetin</div>
                    <div className={styles.cardSecondText}>Farklı platformlarda ve uygulamalarda dağılmış olan verileri ve görevleri tek bir yerde toplayarak yönetmeyi amaçlayan bir yaklaşım</div>
                    <Button type='second' text='Detaylı bilgi al' theme={theme ? null:'light'} width='high'/>
                </div>
                <div>
                    <img src={second} alt='second' />
                </div>
            </div>
        </section>
        <section className={theme ? styles.purpleSection : styles.lightpurpleSection}>
            <div className={styles.thirdRelative}>
                <img src={third} alt='third' className={styles.thirdImg}></img>
            </div>
            <div className={styles.purpleContent}>
                <div className={styles.lightText}>Günlük enerjinizi artıracak şeyler.</div>
                <div className={styles.purpleTitle}>Günlük ruh sağlığınız için basit araç, güçlü etki.</div>
                <div className={styles.purpleSecureDiv}>
                    <img src={secure} alt='secure' className={styles.secureImg}></img>
                    <div className={styles.secureText}>Güvenli ve korunaklı</div>
                </div>
                <div className={styles.purpleText}>Günlük hayatın koşuşturması içinde, zihinsel sağlığımızı korumak için basit ama etkili araçlara ihtiyaç duyuyoruz. Günlük hayatın rutininde uygulanabilen basit araç olan bu proje, zihinsel sağlığımızı korumada ve geliştirmede güçlü bir etkiye sahiptir.</div>
            </div>
        </section>
        <section className={theme ? styles.section : styles.lightsection}>
            <div className={`${styles.uiCardDiv} ${layout.container}`}>
                <div className={styles.uiCardContent}>
                    <div className={theme ? styles.uiCardTitle : styles.lightuiCardTitle}>"Logos ile başlamanın yolları”</div>
                    <div className={theme ? styles.uiCardText : styles.lightuiCardText}>İnsanların zor zamanlarında yardımcı olmak ve onlara destek sağlamak için tasarlanmıştır.</div>
                    <Button type='primary' text='Şanısın Dene' />
                </div>   
                <div className={styles.uiCardPurple}>
                    {arrUI.map((item)=>
                        <div className={theme ? styles.uiCardEnclusive : styles.lightuiCardEnclusive}>
                            <div className={styles.uiPurpleDiv}>
                                <div className={styles.uiPurpleNumber}>{item.number}</div>
                                <div className={styles.uiPurpleTitle}>{item.title}</div>
                                <div className={styles.uiPurpleText}>{item.text}</div>
                            </div>
                            <div className={styles.uiPurpleDarkDiv}>
                                <img src={item.img} alt={item.alt} height={248} width={154}></img>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
        <section className={theme ? styles.sssSection : styles.lightsssSection}>
            <div className={`${layout.container} ${styles.faqContainer}`}>
                <div className={styles.cardStatic}>
                    <img className={styles.sssKaralama} src={karalama} alt='karalama' height={40} width={304}></img>
                </div>
                <div className={styles.sssTitle}>Sıkça sorulan sorular</div>
                <div className={styles.sssText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis est id faucibus iaculis. Cras et congue tortor. Integer laoreet leo risus, accumsan aliquam nisi ornare at.</div>
                <div className={styles.sssCardStatic}>
                {arrFaq.map((item)=>
                    <div className={styles.sssCardDiv}>
                        <div className={styles.faqCard}>
                            <details>
                                <summary className={theme ? null : styles.lightSummary}>{item.title1}</summary>
                                    <div className={styles.faqText}>
                                        {item.text1}
                                    </div>
                            </details>
                        </div>
                        <div className={styles.faqCard}>
                            <details>
                                <summary className={theme ? null : styles.lightSummary}>{item.title2}</summary>
                                <div className={styles.faqText}>
                                    {item.text2}
                                </div>
                            </details>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </section>
        <div className={styles.cardStatic}>
            <img className={theme ? styles.sssBG : styles.lightsssBG} src={bg} alt='bg'></img>
        </div>
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