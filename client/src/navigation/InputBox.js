import {React, useState} from 'react';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import { RadioButton } from './RadioButton';

function InputBox({question, placeholder, hasNext}){
    const [userName, setUserName] = useState('');
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `chat`; 
        navigate(path, { state: { name: userName } });
    }

    return(
        <div class="bg-dark pt-5 pb-5 justify-content-center">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p class="text-white text-center display-3 pb-3">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString(question)
                        .start()
                    }}
                />
            </p>
            <div class="container pt-1 justify-content-center text-center">
                <div class="d-inline p-2">
                    <input class="form-control-lg w-50" type="text" placeholder={placeholder} aria-label=".form-control-lg example"
                        onChange={(ev) => {
                            setUserName(ev.target.value);
                        }}
                    ></input>
                </div>
                {
                    hasNext
                    ?
                    <div class="d-inline p-2">
                        <button 
                            className="btn btn-lg btn-success mb-2 z-1" 
                            onClick={() => {
                                routeChange()
                            }}
                        >
                            Next
                        </button>  
                    </div>
                    :
                    null
                }
            </div>
            <br></br>
            <div class="container pt-1 justify-content-center text-center">
                <RadioButton label="Friend" value="Friend" />
                <RadioButton label="Interview" value="Interview" />
                <RadioButton label="Date" value="Date" />
            </div>
            <br></br>
            <br></br>
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

export default InputBox;