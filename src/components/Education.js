import React from 'react'
import '../App.css'
import styles from '../styles/Education.module.css'
const Education = () => {
  return (
    <section id="education"className="center container">
      <h3>Education</h3>
      <div className={`shadow p-3 mb-5 bg-white rounded`}>
        <div className='row'>
          <div className='col-md-4 col-sm-6 col-lg-4 col-xs-12'>
            <img src={require('../university.png')} width="60px" height="60px" />
            {'\u00A0'} <h6>Guru Gobind Singh Indraprastha University</h6>

          </div>
          <div className={`col-md-8 col-sm-6 col-lg-8 col-xs-12 ${styles.left}`}>
            I completed my education from Bharati Vidyapeeth's College of Engineering under IP University. I got my degree with distinction
            and with first division. I was also a part of ACM chapter of BVP for 2 years.
          </div>
        </div>
      </div>
      <div className="shadow p-3 mb-5 bg-white rounded">
        <div className='row'>
          <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12'>
            <img src={require('../school.png')} width="60px" height="60px" />
            {'\u00A0'} <h6>S.T Gregorios School</h6>
          </div>
          <div className={`col-md-8 col-sm-6 col-lg-8 col-xs-12 ${styles.left}`}>
            I completed my high school from S.T Gregorios School in New Delhi. I secured 92.6% in my AISSE exams. My school
            is in dwarka sub city of New Delhi.
          </div>
        </div>

      </div>

    </section>
  )
}

export default Education
