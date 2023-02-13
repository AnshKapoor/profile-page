import React from 'react';
import Carousel from './Carousel';
import styles from '../styles/Projects.module.css';
const Projects = () => {
    return (
        <section id='projects' className='center container'>
            <h3 className='mb-2'>Projects</h3>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-6 col-xs-12'>
                    <div className="card-block px-6">
                        <h4 className="card-title">Edtech </h4>
                        <p className ={`card-text ${styles.left}`}>
                         This project serves as a portal where students and counsellors can interact with each other through a common medium.
                         Applying for masters is a very complicated procedure and needs a lot of assistance to complete the process. This is the place for those students.
                         I lead the backend team for the REST API's to support this Frontend application along with frontend development on React.
                        </p>
                        
                        <a href="https://edtech.innovationm.com/" target="_blank" class="mt-auto btn btn-primary mb-5">Live Url</a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xs-12">
                  <Carousel/>
                </div>
            </div>

        </section>
    )
}

export default Projects
