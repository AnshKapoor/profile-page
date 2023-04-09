import React from 'react'
import data from '../content/Contacts.json';
import styles from '../styles/Contact.module.css';
import {isMobile} from 'react-device-detect';
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
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="single-contact text-center wow fadeInDown" data-wow-delay="0.2s">
                        <i className="fa fa-home"></i>
                        <h2>Location</h2>
                        <p>Greater Noida West,UP,India</p> 
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-contact text-center wow fadeInDown" data-wow-delay="0.4s">
                        <i class="fa fa-phone"></i>
                        <h2>Phone: </h2>
                        <p>(+91) 870-045-3095</p> 
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-contact text-center wow fadeInDown" data-wow-delay="0.6s">
                        <i class="fa fa-envelope-open"></i>
                        <h2>Email</h2>
                        <p>ansh605@gmail.com</p> 
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-contact text-center wow fadeInDown" data-wow-delay="0.8s">
                        <i class="fa-brands fa-gg"></i>
                        <h2>Social Media: </h2>
                        <div class="socials">
                            <a href="https://www.facebook.com/ansh.kapoor.1232/" target="_blank"><i className="fa-brands fa-facebook"></i></a> 
                            <a href="https://www.linkedin.com/in/ansh-kapoor-65b423149/" target="_blank"><i class="fa-brands fa-linkedin"></i></a> 
                            <a href="https://twitter.com/AnshKap33639127" target="_blank"><i class="fa-brands fa-twitter"></i></a> 
                            <a href="https://in.pinterest.com/ansh605/boards/" target="_blank"><i class="fa-brands fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                </div>
                <div class="row">

                <div class="col-md-12 col-md-offset-1">
                    <form id="contact-form" method="post" action="mailto:ansh605@gmail.com" class="wow fadeInDown" data-wow-delay="1s">

                        

                        <div class="controls">

                            <div class="row">
                                <div class="col-md-6">
                                    <div className={isMobile ? "form-group mt-4 mb-4":"form-group" }>
                                        <input id="form_name" type="text" name="name" class="form-control" placeholder="Enter your full name *" required="required" data-error="Fullname is required."/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input id="form_email" type="email" name="email" class="form-control" placeholder="Enter your email *" required="required" data-error="Valid email is required."/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea id="form_message" name="message" class="form-control" placeholder="Your Message *" rows="4" required="required" data-error="Leave a message for me"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-4">
                                    <button class="btn btn-send" value="">Send message</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact
