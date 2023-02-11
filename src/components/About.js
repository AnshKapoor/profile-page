import React from 'react';
import '../App.css';
import styles from '../styles/About.module.css';
import data from '../content/About.json';
const About = () => {
  return (
    <section id="about-me" className='container'>
      <h3 className={styles.center}>About me</h3>
      <div className='row'>
        <div className={`col-md-6 col-sm-12 col-lg-6 col-xs-12 ${styles.introFont}`}>
          {data.name}<br />
          <p>{data.introduction}</p>
          <p>{data.hobbies}</p>
          <p>{data.interests}</p>
          <p>{data.channels}</p>
          <p>Thank you for visiting my page.</p>
        </div>
        <div className='col-md-6 col-lg-6 col-sm-12 col-xs-12'>
          <img src={require('../ansh.png')} height="70%" width="70%" />
        </div>
      </div>
    </section>
  )
}

export default About
