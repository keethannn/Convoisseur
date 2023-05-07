import React from 'react';
import "../App.css"

function About(){
    return(
        <section id='about'>
            <br />
            <br />
            <br />
            <br />
            <div class="row g-0">
                <div class="col w-50">
                    <img class="img-fluid" src="download.png"/>
                </div>
                <div class="col text-white text-start bg-dark bg-gradient text-white p-4 align-middle">
                    <h1 class="fw-light">
                        The Team
                    </h1>
                    <br />
                    <h3 className='text-xl'>
                        Kang - Full Stack Developer
                        <br />
                        <br />
                        Keethan - Frontend Developer
                        <br />
                        <br />
                        Abishanan - Frontend Developer
                        <br />
                        <br />
                        Rahabar - Project Design & UI Design
                        <br />
                        <br />
                    </h3>
                    <br />
                    <p1>
                        We're a group of innovators who found a creative solution for those looking to improve their conversation skills - all through the power of AI. 
                    </p1>
                </div>
            </div>
        </section>
    );
};

export default About;