import React from 'react'
import data from '../content/Contacts.json';
import styles from '../styles/Contact.module.css';
const Contact = () => {
    const contacts = data.map((e) => {
        return (
            <div className={`row ${styles.contactWidth}`}>
                <div class={`card ${styles.cardShadow}`}>
                    <div class="card-body">
                        <a href={e.link} target="_blank"> <img src={e.img} width="25%" height="25%" /></a>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section id="contact" className='center container'>
            <h3 className='mb-5'>Contact</h3>
            {contacts}
        </section>
    )
}

export default Contact
