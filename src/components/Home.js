import React from 'react'
import styles from '../styles/Home.module.css'
import hello from '../hello.gif';
import designer from '../designer.png'
import coding from '../coding.png';
import ParticlesApp from './Particles';
const Home = () => {
    const imgheight = "80px";
    return (
        <section className={ styles.home } id="home">
            <div className='container'>
                <div className='row'>
                    <div className={ `col-md-12 col-sm-12 ${styles.center}` }>
                        <div className={ styles.intro }>Ansh Kapoor</div>
                        <div className={ styles.qualification }>Engineer <img src={ require("../developer.png") } height={ imgheight } /> Designer <img src={ designer } height={ imgheight } />and Developer <img src={ coding } height={ imgheight } /></div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Home
