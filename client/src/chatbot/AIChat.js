import '../App.css'
import './Chat.css'
import Typewriter from 'typewriter-effect'
import { useEffect } from 'react';

function AIChat({data, useTypewriter}) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = data;

    useEffect(() => {
        window.speechSynthesis.speak(msg);
    }, []);

    return (<div className='chat-message ai-message '
                >
                <div style={{ whiteSpace: "pre-line" }} className='text-white'>
                    {
                        useTypewriter
                        ?
                        <Typewriter
                            className='text-white'
                            onInit={(typewriter) => {
                                typewriter
                                .typeString(data)
                                .start()
                            }}
                        />
                        :
                        data
                    }
                </div> 
            </div>);
}

export default AIChat