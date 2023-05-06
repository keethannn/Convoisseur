import React from 'react';

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div class="container pt-2">
                <a class="navbar-brand">
                    { /*<img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height="36"/> */}
                    <p class="display-6">Convoisseur</p>
                </a> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <a class="nav-link active" href="#">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">FAQs</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;