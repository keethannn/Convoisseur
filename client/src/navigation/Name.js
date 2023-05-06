import React from 'react';

function Name(){
    return(
        <div class="container pt-5 justify-content-center">
            <p class="display-3 pb-3">What is your name?</p>
            <div class="container pt-1 justify-content-center">
                <div class="d-inline p-2">
                    <input class="form-control-lg w-50" type="text" placeholder="Your Name" aria-label=".form-control-lg example"></input>
                </div>
                <div class="d-inline p-2">
                    <a class="btn btn-lg btn-success h-100">Next</a>  
                </div>
            </div>
        </div>
    );
};

export default Name;