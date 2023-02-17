import React from "react";
import styles from '../styles/WorkEx.module.css';
import data from '../content/WorkEx.json';
const WorkEx = () => {
    const Companies = data.map((e) => {
        return (
            <div className={ styles.cards_landscape_wrap_2 }>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-8 col-lg-8">

                            <div class="card-flyer">
                                <div class="text-box">
                                    <div class="text-container">
                                        <h5>{ e.company.name }</h5>
                                        <p className={ styles.left }>{ e.description }</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="image-box">
                                <img src={ e.company.logo } alt="" width="60%" height="60%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section id="work-experience" className='center container'>
            <h3 className='mb-5'>Work Experience</h3>
            { Companies }
        </section>

    )
}
export default WorkEx;