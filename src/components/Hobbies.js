import React from 'react'
import Hobby from '../content/Hobbies.json';
import '../App.css';
const Hobbies = () => {
    const hobbies = Hobby.map((e) => {
        return (
            <div className='row'>
                <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12'>
                    <h5>{e.name}</h5>
                    <p className='left'>{e.description}</p>
                </div>
                <div className='col-md-8 col-lg-8 col-sm-12 col-xs-12'>
                    <img src={e.img} height="80%" width="80%" />
                </div>
            </div>


        )
    })
    return (
        <section id="hobbies" className='center container mt-5'>
            <h3 className='mb-5'>Hobbies</h3>
            {hobbies}
        </section>
    )
}

export default Hobbies
