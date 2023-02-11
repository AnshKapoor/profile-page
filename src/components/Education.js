import React from 'react'
import styles from '../styles/Education.module.css'
const Education = () => {
  return (
    <section className="center">
      <h3>Education</h3>
      <div className='container'>
        <div className='row'>
        <div className='col-md-4 col-sm-6 col-lg-4 col-xs-12'>
        <img src={require('../university.png')} width="60px" height="60px"/>
        {'\u00A0'} <h4>Guru Gobind Singh Indraprastha University</h4>
        
        </div>
        <div className={`col-md-8 col-sm-6 col-lg-8 col-xs-12 ${styles.left}`}>
          I completed my education from Bharati Vidyapeeth's College of Engineering under IP University. I got my degree with distinction
          and with first division. I was also a part of ACM chapter of BVP for 2 years.
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Education
