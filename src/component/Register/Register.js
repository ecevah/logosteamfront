import React, {useState} from 'react';
import styles from '../../styles/Login.module.scss';
import logosLogo from '../../img/logosLogoLight.svg';
import FeatherIcon from 'feather-icons-react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [check, setCheck] = useState('first');
    const [kosul, setKosul] = useState(false);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [unvan, setUnvan] = useState('');
    const [tecrübe, setTecrube] = useState(0);
    const [file, setFile] = useState(null);
    const [onay, setOnay] = useState(false);

    const [tag1, setTag1] = useState(false);
    const [tag2, setTag2] = useState(false);
    const [tag3, setTag3] = useState(false);
    const [tag4, setTag4] = useState(false);
    const [tag5, setTag5] = useState(false);
    const [tag6, setTag6] = useState(false);
    
    const arrTag = [
        {
            tag: '1',
            test: tag1
        },
        {
            tag: '2',
            test: tag2
        },
        {
            tag: '3',
            test: tag3
        },
        {
            tag: '4',
            test: tag4
        },
        {
            tag: '5',
            test: tag5
        },
        {
            tag: '6',
            test: tag6
        }
    ]

    const firstHandle = () => {
        if(name!=='' && surname!==''&& mail!==''&&pass!=='' && onay!==false){
        setCheck('second');}
    }

    const secondHandle = async () => {
        const arr = [];
        arrTag.map((item)=>
            item.test === true ? arr.push(item.tag) : null
        );
        const payload = {
            name: name,
            surname: surname,
            pass: pass,
            tag: arr,
            unvan: unvan,
            tecrübe: tecrübe,
            file: file,
            email: mail
        }
        try{
            await axios.post('http://localhost:3001/api/psyc/add',payload);
            navigate("/login");
        } catch (err) {
            return err
        }
    }

    const backHandle = () =>{
        setCheck('first');
    }

  return (
    <section className={styles.section}>
        <div className={kosul ? styles.kosul : styles.none}>
            <div className={styles.kosulContent}>
                <div className={styles.kosulInclusive}>
                    <div className={styles.kosulText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                    <div className={styles.kosulBtnInclusive}>
                        <button onClick={() => {setCheck(true); setKosul(false)}} className={styles.kosulbtn} style={{backgroundColor:'green'}}>Kabul Et</button>
                        <button onClick={()=> setKosul(false)} className={styles.kosulbtn} style={{backgroundColor:'red'}}>Geri Dön</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.inclusive}>
            <div>
                <img src={logosLogo} width={115} height={60} alt='logo'></img>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className={check==='first' ? styles.contentSign : styles.none}>
                <div className={styles.title}>Kayıt Ol</div>
                <div className={styles.starContentHalf}>
                    <div className={styles.starInclusive}>
                        <div className={styles.starContent}>
                            <div className={styles.blackText}>Ad </div>
                            <div className={styles.starText}>*</div>
                        </div>
                        <input type='text' className={styles.input} value={name} onChange={(e)=> setName(e.target.value)} required></input>
                    </div>
                    <div className={styles.starInclusive}>
                        <div className={styles.starContent}>
                            <div className={styles.blackText}>Soyad</div>
                            <div className={styles.starText}>* </div>
                        </div>
                        <input type='text'  className={styles.input} value={surname} onChange={(e)=> setSurname(e.target.value)} required></input>
                    </div>
                </div>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Mail Adresi </div>
                    <div className={styles.starText}>*</div>
                </div>
                <input type='email' className={styles.input} value={mail} onChange={(e)=> setMail(e.target.value)} required></input>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Şifre</div>
                    <div className={styles.starText}>* </div>
                </div>
                <div className={styles.relative}>
                    <button className={styles.absoluteShow} onClick={()=> setShow(!show)}>
                        <FeatherIcon icon={show ? 'eye-off' : 'eye'} color='#858585' size="20" stroke-width="2.5"/>
                    </button>
                </div>
                <input type={show ? 'text':'password'} className={styles.input} style={{paddingRight: "40px"}} value={pass} onChange={(e)=> setPass(e.target.value)} required></input>
                <div className={styles.ifContent}>
                    <input type='checkbox' className={styles.check} id='check' required onChange={()=>setOnay(!onay)}></input>
                    <a onClick={()=>setKosul(true)} className={styles.ifBtn}>Şartları ve koşulları</a>
                    <div className={styles.ifText}>kabul ediyorum.</div>
                </div>
                <button className={styles.button} onClick={async()=> await firstHandle()}>Kayıt Ol</button>
                <div className={styles.signContent}>
                    <div className={styles.signText}>Hesabın var mı?</div>
                    <button onClick={()=> navigate("/login")} className={styles.signPurple}>Giriş Yap</button>
                </div>
            </form>
            <form onSubmit={(e)=>e.preventDefault()} className={check==='second' ? styles.contentSign : styles.none}>
                <div className={styles.title}>Kayıt Ol</div>
                <div className={styles.starContentHalf}>
                    <div className={styles.starInclusive}>
                        <div className={styles.starContent}>
                            <div className={styles.blackText}>Unvan </div>
                            <div className={styles.starText}>*</div>
                        </div>
                        <input type='text' className={styles.input} value={unvan} onChange={(e)=> setUnvan(e.target.value)} required></input>
                    </div>
                    <div className={styles.starInclusive}>
                        <div className={styles.starContent}>
                            <div className={styles.blackText}>Tecrübe</div>
                            <div className={styles.starText}>* </div>
                        </div>
                        <div className={styles.relative}>
                            <div className={styles.absoluteText}>Yıl</div>
                        </div>
                        <input type='number' className={styles.input} value={tecrübe} onChange={(e)=> setTecrube(e.target.value)} required></input>
                    </div>
                </div>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Tag </div>
                    <div className={styles.starText}>*</div>
                </div>
                <div className='row row-cols-2'>
                    <div className='col'>
                        <input type='checkbox' style={{marginRight:'6px'}} onChange={()=> setTag1(!tag1)}></input>
                        <label>Psikoloji</label>
                    </div>
                    <div className='col'>
                        <input type='checkbox' style={{marginRight:'6px'}} onChange={()=> setTag2(!tag2)}></input>
                        <label>Psikoloji</label>
                    </div>
                    <div className='col'>
                        <input type='checkbox' style={{marginRight:'6px'}} onChange={()=> setTag3(!tag3)}></input>
                        <label>Psikoloji</label>
                    </div>
                    <div className='col'>
                        <input type='checkbox' style={{marginRight:'6px'}} onChange={()=> setTag4(!tag4)}></input>
                        <label>Psikoloji</label>
                    </div>
                    <div className='col'>
                        <input type='checkbox' style={{marginRight:'6px'}} onChange={()=> setTag5(!tag5)}></input>
                        <label>Psikoloji</label>
                    </div>
                    <div className='col'>
                        <input type='checkbox' style={{marginRight:'6px'}} onChange={()=> setTag6(!tag6)}></input>
                        <label>Psikoloji</label>
                    </div>
                </div>
                <div className={styles.image}>
                    <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" onChange={(e)=> setFile(e.target.files[0])} style={{marginTop:'30px', marginBottom:'30px'}}/>
                </div>
                <button className={styles.button} onClick={async()=> await secondHandle()}>Kayıt Ol</button>
                <button className={styles.buttonArrow} onClick={async()=> await backHandle()}>Geri Dön</button>
            </form>
        </div>
    </section>
  )
}
