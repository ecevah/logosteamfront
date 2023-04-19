import React, {useState, useEffect} from 'react'
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

const PAGE_SIZE = 10;

export default function Dashboard(){
    const navigate = useNavigate();
    const [post,setPost]=useState(null);
    const [counter, setCounter] = useState(0);

    const header = {
        'x-access-token' : `${localStorage.getItem('token')}`
    }

    const arrClient =
        {
            "status": true,
            "total": 0,
            "reservation": [
                {
                    "day": "",
                    "client_id": {
                        "name": "",
                        "surName": "",
                    }
                }
            ]
        }

    const [arrRes, setArrRes] = useState(arrClient);

    useEffect(()=>{
        Auth();
    },[])

    const Auth = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
      
        if (!token || !id) {
          navigate('/login');
          return;
        }
      
        try {
            const res = await verify(token);
            if (res) {
              const resApi = await axios.get(`/api/reservation/find?psyc_id=${id}&limit=9`, {
                  headers: {
                    'x-access-token': token,
                  },
                });
              await setArrRes(resApi.data);
              console.log(arrRes)
              setPost(true);
            } else {
              navigate('/login');
            }
          } catch (err) {
            console.error(err);
          }
        }
    const [open, setOpen] = useState(false)

    const arrHeader = [
        {
            text:'Ön Panel',
            href:'',
            active: '',
            icon: onpanel,
            purple: onpanelpurple
        },
        {
            text:'Randevular',
            href:'/reservation',
            active: 'active',
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

    const parseDate = (date) => {
        const newParse = date.split("-");
        const newDate = newParse[2] + "." + newParse[1] + "." + newParse[0];
        return newDate;
    }

    const dateCalc = (date) => {
        const birth = new Date(date);
        const now = Date.now();
        const diff = now - birth.getTime();
        const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        return age;
    }

    const timeChack = (itemTime) => {
        const currentTime = new Date();
        const itemHour = parseInt(itemTime.split('.')[0]);
        const itemMinute = parseInt(itemTime.split('.')[1]);
        const itemDateTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), itemHour, itemMinute);
        if (itemDateTime > currentTime) {
            return true
        } else {
            return false
        }
    }

    const handleData = async (page) => {
        const resApi = await axios.get(`/api/reservation/find?psyc_id=${localStorage.getItem('id')}&limit=${(page*10)+9}&skip=${page*10}`, {
            headers: {
              'x-access-token': localStorage.getItem('token'),
            },
          });
          console.log(resApi);
        await setArrRes(resApi.data);
        await setCounter(page);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(arrRes.reservation.length / PAGE_SIZE);
  
    const paginatedReservations = arrRes.reservation.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE
    );
  
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
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
                        <div className={styles.title}>{`Randevular`}</div>
                        <div className={styles.overflowdiv}>
                        <div className={styles.reservationPageInclusive}>
                            <div className={styles.reservationPageContent}>
                                <div className={styles.reservationPageFirstColumn}>
                                    <div className={styles.reservationPageColumn} style={{width:'52px'}}>#</div>
                                    <div className={styles.reservationPageColumn} style={{marginLeft:'5px',width:'220px'}}>Ad</div>
                                </div>
                                <div className={styles.reservationPageColumn} style={{width:'55px'}}>Yaş</div>
                                <div className={styles.reservationPageColumn} style={{width:'86px'}}>Cinsiyet</div>
                                <div className={styles.reservationPageColumn} style={{width:'140px'}}>Tarih</div>
                                <div className={styles.reservationPageColumn} style={{width:'64px'}}>Saat</div>
                                <div className={styles.reservationPageColumn} style={{width:'106px'}}>Durum</div>
                            </div>
                            <div className={styles.reservationPageContent}>
                                <div className={styles.reservationPageFirstColumn}>
                                    <div className={styles.reservationPageColumn} style={{width:'52px'}}>1</div>
                                    <div className={styles.reservationPageColumn} style={{marginLeft:'5px',width:'220px',justifyContent:'flex-start', paddingLeft:'20px'}}>
                                        <div className={styles.clientCard}>
                                            <div>
                                                <img className={styles.clientImg} src={account} alt={'asdasd'} width={45} height={45}></img>
                                            </div>
                                            <div className={styles.clientContent}>
                                                <div className={styles.clientTitle} style={{marginLeft: '7px'}}>{`${'asdas'} ${'asdsadsd'}`}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.reservationPageColumn} style={{width:'55px'}}>{'daasd'}</div>
                                <div className={styles.reservationPageColumn} style={{width:'86px',textAlign:'center'}}>{'asdasd'}</div>
                                <div className={styles.reservationPageColumn} style={{width:'140px'}}>{'asdasdasd'}</div>
                                <div className={styles.reservationPageColumn} style={{width:'64px'}}>{'sadsda'}</div>
                                <div className={styles.reservationPageColumn} style={{width:'106px'}}>
                                        <button className={styles.reservationPageBtnLogIn}>
                                            <FeatherIcon icon='log-in' color='#00B383' size="15" stroke-width="2.5"/>
                                        </button>
                                </div>
                            </div>
                            {arrRes && arrRes.reservation && arrRes.reservation.map((item, index) => (
                            <div className={styles.reservationPageContent}>
                            <div className={styles.reservationPageFirstColumn}>
                                <div className={styles.reservationPageColumn} style={{width:'52px'}}>{index==0 ? index+2 : index+1}</div>
                                <div className={styles.reservationPageColumn} style={{marginLeft:'5px',width:'220px',justifyContent:'flex-start', paddingLeft:'20px'}}>
                                    <div className={styles.clientCard}>
                                        <div>
                                            <img className={styles.clientImg} src={account} alt={item.client_id.surName} width={45} height={45}></img>
                                        </div>
                                        <div className={styles.clientContent}>
                                            <div className={styles.clientTitle} style={{marginLeft: '7px'}}>{`${item.client_id.name} ${item.client_id.surName}`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.reservationPageColumn} style={{width:'55px'}}>{dateCalc(item.client_id.dateOfBirth)}</div>
                            <div className={styles.reservationPageColumn} style={{width:'86px',textAlign:'center'}}>{item.client_id.sex}</div>
                            <div className={styles.reservationPageColumn} style={{width:'140px'}}>{parseDate(item.day)}</div>
                            <div className={styles.reservationPageColumn} style={{width:'64px'}}>{item.time}</div>
                            <div className={styles.reservationPageColumn} style={{width:'106px'}}>
                                {
                                    new Date(item.day)>Date.now() ?
                                    <button className={styles.reservationPageBtn}>
                                        <FeatherIcon icon='x' color='#F0735A' size="15" stroke-width="2.5"/>
                                    </button>:
                                    (
                                        timeChack ? 
                                            <button className={styles.reservationPageBtnCheck}>
                                                <FeatherIcon icon='check' color='#3e221c4d' size="15" stroke-width="2.5"/>
                                            </button>:
                                            (item.day=== new Date().toISOString().split('T')[0] ? 
                                            <button className={styles.reservationPageBtn}>
                                                <FeatherIcon icon='x' color='#F0735A' size="15" stroke-width="2.5"/>
                                            </button>
                                            :<button className={styles.reservationPageBtnCheck}>
                                                <FeatherIcon icon='check' color='#3e221c4d' size="15" stroke-width="2.5"/>
                                            </button>)
                                    )
                                }
                            </div>
                        </div>
                        ))}
                        </div>
                        </div>
                        <div className={styles.paginationDiv}>
                            <div className={styles.paginatinBarTitle}>{`${arrRes.total} hastadan ${(counter*10)+1}-${(counter*10)+10>arrRes.total?arrRes.total:(counter*10)+10} arası gösteriliyor`}</div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li onClick={()=> {setCounter(counter-1);handleData(counter)}} className="page-item"><a className="page-link">Previous</a></li>
                                    {Array.from({length: Math.ceil(arrRes.total/10)}, (_, i) => (
                                        <li onClick={()=> handleData(i)} className="page-item"><a className="page-link">{i+1}</a></li>
                                    ))}
                                    <li onClick={()=> {setCounter(counter+1);handleData(counter)}} className="page-item"><a className="page-link">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
