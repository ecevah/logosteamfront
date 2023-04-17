import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FeatherIcon from 'feather-icons-react';


import {useNavigate} from 'react-router-dom';

import styles from '../../styles/Dashboard.module.scss';
import layout from '../../styles/Layout.module.scss';

import logosLogo from '../../img/logosLogoLight.svg';
import account from '../../img/01.jpg.png';
import kyk from '../../img/kykSiyah.svg';
import mimar from '../../img/mimarSiyah.svg';
import mühendishane from '../../img/mühendishaneSiyah.svg';
import teknofest from '../../img/teknofestSiyah.svg';
import teknoloji from '../../img/teknolojiSiyah.svg';
import mesaj from '../../img/mesaj.svg';
import mesajpurple from '../../img/mesajpurple.svg';
import odeme from '../../img/odeme.svg';
import odemepurple from '../../img/odemepurple.svg';
import onpanel from '../../img/onpanel.svg';
import onpanelpurple from '../../img/onpanelpurple.svg';
import profil from '../../img/profile.svg';
import profilpurple from '../../img/profilepurple.svg';
import randevu from '../../img/rendevu.svg';
import randevupurple from '../../img/randevupurple.svg';
 
import verify from '../../api/verify';
import axios from '../../api/axios';


export default function Dashboard(){
    const navigate = useNavigate();
    const [post,setPost]=useState(null);

    const header = {
        'x-access-token' : `${localStorage.getItem('token')}`
    }

    useEffect(()=>{
        Auth();
    },[])

    const Auth = async () => {
        const res = await verify(localStorage.getItem('token'));
        if(res){
            const reservation = await axios.post(`/api/reservation/reservation/lookup_doktor/${localStorage.getItem('id')}}`,{
                'token':localStorage.getItem('token')
            },header);
            console.log(reservation)
            setPost(true);
        }else{
            navigate("/login")
        }
    }

    const [open, setOpen] = useState(false)

    const arrHeader = [
        {
            text:'Ön Panel',
            href:'',
            active: 'active',
            icon: onpanel,
            purple: onpanelpurple
        },
        {
            text:'Randevular',
            href:'/reservation',
            active: '',
            icon: randevu,
            purple: randevupurple

        },
        {
            text:'Hasta Ödemeleri',
            href:'/pay',
            active: '',
            icon: odeme,
            purple: odemepurple
        },
        {
            text:'Yorumlar',
            href:'/comment',
            active: '',
            icon: mesaj,
            purple: mesajpurple
        },
        {
            text:'Profil Ayarları',
            href:'/setting',
            active: '',
            icon: profil,
            purple: profilpurple
        }
    ]

    const arrClient = [
        {
            img: account,
            title: 'Ahmet Sırnaç',
            date: '27.05.2023'
        },
        {
            img: account,
            title: 'Ahmet Sırnaç',
            date: '27.05.2023'
        },
        {
            img: account,
            title: 'Ahmet Sırnaç',
            date: '27.05.2023'
        },
        {
            img: account,
            title: 'Ahmet Sırnaç',
            date: '27.05.2023'
        },
        {
            img: account,
            title: 'Ahmet Sırnaç',
            date: '27.05.2023'
        }
    ]

    const arrYorum = [
        {
            text: "Size tedavi sürecim boyunca sunduğunuz profesyonel ve kişisel yaklaşımınız için çok teşekkür ederim. Sizi tanımak ve çalışmak için bir şansım olduğu için çok mutluyum. Sadece birkaç seans sonra bile, kendimi daha iyi hissetmeye başladım ve bu tamamen sizin güven veren tutumunuz ve uzmanlığınız sayesinde oldu. Danışanlarınızla gerçekten empati kurabilen, ihtiyaçlarına saygı gösteren ve onlara samimi bir şekilde yardımcı olabilen çok az doktor var. Size tavsiye etmek için yeterli söz yok. Kendinize mümkün olan en iyi şekilde bakmak için her şeyi yapıyorsunuz ve beni ve diğer hastalarınızı da aynı şekilde tedavi ediyorsunuz.",
            name: "Ayşe Candan"
        },
        {
            text: "Size tedavi sürecim boyunca sunduğunuz profesyonel ve kişisel yaklaşımınız için çok teşekkür ederim. Sizi tanımak ve çalışmak için bir şansım olduğu için çok mutluyum. Sadece birkaç seans sonra bile, kendimi daha iyi hissetmeye başladım ve bu tamamen sizin güven veren tutumunuz ve uzmanlığınız sayesinde oldu. Danışanlarınızla gerçekten empati kurabilen, ihtiyaçlarına saygı gösteren ve onlara samimi bir şekilde yardımcı olabilen çok az doktor var. Size tavsiye etmek için yeterli söz yok. Kendinize mümkün olan en iyi şekilde bakmak için her şeyi yapıyorsunuz ve beni ve diğer hastalarınızı da aynı şekilde tedavi ediyorsunuz.",
            name: "Candan"
        },
        {
            text: "Size tedavi sürecim boyunca sunduğunuz profesyonel ve kişisel yaklaşımınız için çok teşekkür ederim. Sizi tanımak ve çalışmak için bir şansım olduğu için çok mutluyum. Sadece birkaç seans sonra bile, kendimi daha iyi hissetmeye başladım ve bu tamamen sizin güven veren tutumunuz ve uzmanlığınız sayesinde oldu. Danışanlarınızla gerçekten empati kurabilen, ihtiyaçlarına saygı gösteren ve onlara samimi bir şekilde yardımcı olabilen çok az doktor var. Size tavsiye etmek için yeterli söz yok. Kendinize mümkün olan en iyi şekilde bakmak için her şeyi yapıyorsunuz ve beni ve diğer hastalarınızı da aynı şekilde tedavi ediyorsunuz.",
            name: "Ali"
        },
        {
            text: "Size tedavi sürecim boyunca sunduğunuz profesyonel ve kişisel yaklaşımınız için çok teşekkür ederim. Sizi tanımak ve çalışmak için bir şansım olduğu için çok mutluyum. Sadece birkaç seans sonra bile, kendimi daha iyi hissetmeye başladım ve bu tamamen sizin güven veren tutumunuz ve uzmanlığınız sayesinde oldu. Danışanlarınızla gerçekten empati kurabilen, ihtiyaçlarına saygı gösteren ve onlara samimi bir şekilde yardımcı olabilen çok az doktor var. Size tavsiye etmek için yeterli söz yok. Kendinize mümkün olan en iyi şekilde bakmak için her şeyi yapıyorsunuz ve beni ve diğer hastalarınızı da aynı şekilde tedavi ediyorsunuz.",
            name: "Veli"
        },
        {
            text: "Size tedavi sürecim boyunca sunduğunuz profesyonel ve kişisel yaklaşımınız için çok teşekkür ederim. Sizi tanımak ve çalışmak için bir şansım olduğu için çok mutluyum. Sadece birkaç seans sonra bile, kendimi daha iyi hissetmeye başladım ve bu tamamen sizin güven veren tutumunuz ve uzmanlığınız sayesinde oldu. Danışanlarınızla gerçekten empati kurabilen, ihtiyaçlarına saygı gösteren ve onlara samimi bir şekilde yardımcı olabilen çok az doktor var. Size tavsiye etmek için yeterli söz yok. Kendinize mümkün olan en iyi şekilde bakmak için her şeyi yapıyorsunuz ve beni ve diğer hastalarınızı da aynı şekilde tedavi ediyorsunuz.",
            name: "Deli"
        },
    ]

    const arrSponsor = [
        {
            img: mimar,
            alt: 'mimar'
        },
        {
            img: mühendishane,
            alt: 'mühendishane'
        },
        {
            img: teknofest,
            alt: 'teknofest'
        },
        {
            img: teknoloji,
            alt: 'teknoloji'
        },
        {
            img: kyk,
            alt: 'kyk'
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: "linear",
        pauseOnHover: true,
        customPaging: i => (
            <div>
            </div>
        )
    };

    return (
    <>
        <div className={post ? styles.none : styles.isLoading}>
            <img className={styles.isloadinglogo} src={logosLogo} alt='loadingImg' width={300} height={150}/>
            <svg className={styles.isloadingImg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z" fill="rgba(140,16,184,1)"></path></svg>
        </div>
        <section className={styles.headerSection}>
            <div className={`${styles.headerInclusive} ${layout.containerDashboard}`}>
                <div>
                    <img src={logosLogo} height={58} width={115} alt='logos'></img>
                </div>
                <div>
                    <button onClick={()=>setOpen(!open)}>
                        <FeatherIcon icon={open ? 'x' : 'menu'} color='#858585' size="20" stroke-width="2.5"/>
                    </button>
                </div>
            </div>
        </section>
        <section className={open ? styles.dropdawnOpen : styles.dropdawnClose}>
                <div className={`${styles.dropdawnList}`}>
                    {arrHeader.map((item) =>
                        <button className={styles.navbarbtn}>
                            <img src={item.active==='active' ? item.purple : item.icon} height={12} width={12} alt={item.text}/>
                            <a href={item.href} className={`${styles.headerItem} ${styles[item.active]}`}>{item.text}</a>
                        </button>
                        )}
                </div>
        </section>
        <section className={styles.sectionInclusive}>
            <div className={styles.navbar}>
                <div className={styles.navbarContent}>
                    <div>
                        <img src={logosLogo} height={58} width={115} alt='logos'></img>
                    </div>
                    <div className={styles.sideContent}>
                        <div className={styles.profilCard}>
                            <div>
                                <img className={styles.profilImg} src={account} alt='account'></img>
                            </div>
                            <div className={styles.profilContent}>
                                <div className={styles.profilName}>{`${localStorage.getItem('unvan')} ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`}</div>
                                <div className={styles.profilTag}>{`${localStorage.getItem('tag')}`}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.headerItemDiv}>
                        {arrHeader.map((item) =>
                            <button className={styles.navbarbtn}>
                                <img src={item.active==='active' ? item.purple : item.icon} height={12} width={12} alt={item.text}/>
                                <a href={item.href} className={`${styles.headerItem} ${styles[item.active]}`}>{item.text}</a>
                            </button>
                        )}
                    </div>
                </div>
                <div>
                    <div className={styles.sponsorContent}>
                        {arrSponsor.map((item)=>
                            <div>
                                <img src={item.img} alt={item.alt} width={45}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={`${styles.inclusive}`}>
                    <div className={styles.contentInclusive}>
                        <div className={styles.sideContent}>
                            <div className={styles.profilCard}>
                                <div>
                                    <img className={styles.profilImg} src={account} alt='account'></img>
                                </div>
                                <div className={styles.profilContent}>
                                    <div className={styles.profilName}>{`${localStorage.getItem('unvan')} ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`}</div>
                                    <div className={styles.profilTag}>{`${localStorage.getItem('tag')}`}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.title}>{`Hoş Geldin ${localStorage.getItem('unvan')} ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`}</div>
                        <div className={styles.reservationInclusive}>
                            <div className={styles.reservationTitle}>
                                <div className={styles.resTitle}>Son Randevular</div>
                                <div className={styles.resNumber}>{`${'55'} Hasta`}</div>
                            </div>
                            <div className="container">
                                <div className="row row-cols-lg-3 row-cols-1">
                                {arrClient.map((item)=>
                                    <button className={`col ${styles.mobileRow}`}>
                                        <div className={styles.clientCard}>
                                            <div>
                                                <img className={styles.clientImg} src={item.img} alt={item.title} width={45} height={45}></img>
                                            </div>
                                            <div className={styles.clientContent}>
                                                <div className={styles.clientTitle}>{item.title}</div>
                                                <div className={styles.clientText}>{`Rezervasyon ${item.date}`}</div>
                                            </div>
                                        </div>
                                        <div className={styles.mobileRowDiv}>
                                            <FeatherIcon icon='chevron-right' color='#858585' size="15" stroke-width="2.5"/>
                                        </div>
                                    </button>
                                )}
                                </div>
                            </div>
                        </div>
                        <div className={styles.reservationInclusive}>
                            <div className={styles.reservationTitle}>
                                <div className={styles.resTitle}>Bekleyen Randevular</div>
                                <div className={styles.resNumber}>{`${'55'} Hasta`}</div>
                            </div>
                            <div className="container">
                                <div className="row row-cols-lg-3 row-cols-1">
                                {arrClient.map((item)=>
                                    <button className={`col ${styles.mobileRow}`}>
                                        <div className={styles.clientCard}>
                                            <div>
                                                <img className={styles.clientImg} src={item.img} alt={item.title} width={45} height={45}></img>
                                            </div>
                                            <div className={styles.clientContent}>
                                                <div className={styles.clientTitle}>{item.title}</div>
                                                <div className={styles.clientText}>{`Rezervasyon ${item.date}`}</div>
                                            </div>
                                        </div>
                                        <div className={styles.mobileRowDiv}>
                                            <FeatherIcon icon='chevron-right' color='#858585' size="15" stroke-width="2.5"/>
                                        </div>
                                    </button>
                                )}
                                </div>
                            </div>
                        </div>
                        <div className={styles.reservationInclusive}>
                            <div className={styles.reservationTitle}>
                                <div className={styles.resTitle}>Hasta Yorumları</div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    {arrYorum.map((item) => 
                                        <div>
                                            <div>
                                                <div className={styles.carouselText}>{`“${item.text}”`}</div>
                                                <div className={styles.carouselName}>{`- ${item.name}`}</div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                        <div className={styles.sponsorContent}>
                            {arrSponsor.map((item)=>
                                <div>
                                    <img src={item.img} alt={item.alt} width={45}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
