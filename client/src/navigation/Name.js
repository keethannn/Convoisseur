import React from 'react';

function Name(){
    return(
        <div class="bg-light pt-5 pb-5 justify-content-center">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p class="display-3 pb-3">What is your name?</p>
            <div class="container pt-1 justify-content-center">
                <div class="d-inline p-2">
                    <input class="form-control-lg w-50" type="text" placeholder="Your Name" aria-label=".form-control-lg example"></input>
                </div>
                <div class="d-inline p-2">
                    <a class="btn btn-lg btn-success h-100">Next</a>  
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

export default Name;