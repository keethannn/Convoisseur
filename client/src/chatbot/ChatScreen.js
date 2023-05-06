import { useLocation } from 'react-router';
import { Typewriter } from 'typewriter-effect';
import AIChat from './AIChat';
import UserChat from './UserChat';

import '../App.css'
import { useState } from 'react';

function ChatScreen(){
    const location = useLocation()
    const {name} = location.state

    const [components, setComponents] = useState([]);
    const [input, setInput] = useState('');

    return (
    <div class="flex flex-col h-screen">
        <div className="flex flex-col items-center text-sm dark:bg-gray-799 flex-grow">
            {components}
        </div>
        <footer>
            <div className="bg-dark pt-2 pb-2 justify-content-center w-full">
                <div class="container pt-1 justify-content-center text-center">
                    <div class="d-inline p-2">
                        <input class="form-control-lg w-75" type="text" placeholder="Send a message." aria-label=".form-control-lg example" 
                            onChange={input}
                        />
                    </div>
                    <div class="d-inline p-2">
                        <button className="btn btn-lg btn-success mb-2 z-1"
                            onClick={(evt) => {

                            }}
                        >
                            Send
                        </button>  
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}


export default ChatScreen;