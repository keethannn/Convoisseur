import React from 'react';
import "../App.css"

function Contact(){
    return(
        <section id='contact'>
            <div class="d-flex text-white text-start bg-dark bg-gradient text-white p-4 align-middle justify-content-between">
                <h1 class="fw-light">
                    Contact us:
                </h1>
                <a href='https://www.instagram.com' className='text-white margin-top-buffer'>
                    <h3>Instagram</h3>
                </a>
                <a href='https://www.facebook.com' className='text-white margin-top-buffer'>
                    <h3>Facebook</h3>
                </a>
                <a href='https://www.twitter.com' className='text-white margin-top-buffer'>
                    <h3>Twitter</h3>
                </a>
                <a href='https://www.linkedin.com' className='padding-right-linkedin text-white margin-top-buffer'>
                    <h3>LinkedIn</h3>
                </a>
            </div>
        </section>
    );
};

export default Contact;