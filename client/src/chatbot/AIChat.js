import '../App.css'
import './Chat.css'
import Typewriter from 'typewriter-effect'

function AIChat({data, useTypewriter}) {
    return (<div className='chat-message ai-message '>
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