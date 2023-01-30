import React from 'react'
import styles from '../styles/Home.module.css'
import hello from '../hello.gif';
import designer from '../designer.png'
import coding from '../coding.png'
const Home = () => {
    const imgheight = "80px";
    return (
        <div className='container'>
            <div className='row'>
            <div className={`col-md-12 col-sm-12 ${styles.center}`}>
            <strong className={styles.greeting}>Hello <img src={hello} height={imgheight} /></strong>
            <div className={styles.intro}>This is Ansh Kapoor</div>
            <div className={styles.qualification}>Engineer <img src={require("../developer.png")} height={imgheight} /> Designer <img src={designer} height={imgheight} />and Developer <img src={coding} height={imgheight} /></div>
        </div>
            </div>
        </div>
        
    )
}

export default Home
