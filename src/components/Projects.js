import React from 'react';
import Carousel from './Carousel';
import styles from '../styles/Projects.module.css';
import ProjectsData from '../content/ProjectsData.json';
const Projects = () => {
    let data = ProjectsData.map((e) => {
        return (

            <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-6 col-xs-12'>
                    <div className="card-block px-6">
                        <h4 className="card-title">{e.name}</h4>
                        <p className={`card-text ${styles.left}`}>
                            {e.description}
                        </p>

                        <a href={e.url} target="_blank" class="mt-auto btn btn-primary mb-5">Live Url</a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xs-12">
                    <Carousel data={e.images} />
                </div>
            </div>

        )
    })
    return (
        <section id='projects' className='center container'>
            <h3 className='mb-5'>Projects</h3>
            {data}
        </section>
    )
}

export default Projects
