import { useLocation, useNavigate } from 'react-router';
import AIChat from './AIChat';
import UserChat from './UserChat';

import '../App.css'
import './Chat.css'
import { useEffect, useState } from 'react';

async function callFromApi(myConcatenatedMessage, userName, numInteractions) {
    let formData = new FormData()

    if (numInteractions == 0){
        const opener = `You are meeting with your friend ${userName}. Be engaging and respectful. You say: `
        formData.append('prompt', opener);
    } else {
        formData.append('prompt', myConcatenatedMessage)
    }

    return await fetch('http://127.0.0.1:5000', {
        method: 'POST',
        body: formData
    })
}

async function callFromApiFriend(myConcatenatedMessage, userName, numInteractions) {
  let formData = new FormData()

  if (numInteractions == 0){
      const opener = `You are meeting with your friend ${userName} for a conversation. You do not have a name. Be engaging and respectful. Ask questions about ${userName} and try to get to know him better. You start the conversation by saying: `
      formData.append('prompt', opener);
  } else {
      formData.append('prompt', myConcatenatedMessage)
  }

  return await fetch('http://127.0.0.1:5000/friend', {
      method: 'POST',
      body: formData
  })
}

function ChatScreen(){
    const location = useLocation()
    const {name} = location.state

    let navigate = useNavigate(); 
    const routeHome = () =>{  
        const path = '/'; 
        navigate(path);
    }

    const refreshPage = () => {
        window.location.reload();
    }

    const [input, setInput] = useState('');


    const [init, setInit] = useState(false)
    const [end, setEnd] = useState(false)
    const [numInteractions, setNumInteractions] = useState(0);
    const [components, setComponents] = useState([])


    useEffect(() => {
        callFromApiFriend('', name, numInteractions).then(function(response) {
            if (response.ok){
                return response.text()
            }
            return Promise.resolve(`Hello ${name}, how are you doing?`)
        }).then(function(text) {
            components.push([0, text.trim().replace(/"/g, '')])
        }).finally(function(){
            setInit(true)
        })
    }, [])
    
    return <div>
        <body className="flex flex-col items-center text-sm chat-bottom-padding">
            {
                components.map((val, index) => (val[0] == 0) ? <AIChat data={val[1]} useTypewriter={index==components.length-1} key={index} /> : <UserChat message={val[1]} />)
            }
        </body>
        {
        init 
        ?
        <footer>
            <div className="bg-dark pt-2 pb-2 justify-content-center w-full">
                {
                    end
                    ?
                    <div class="pt-1 justify-content-center text-center">
                        <div class="d-inline p-2">
                            <button className="btn btn-lg btn-success mb-2 z-1" onClick={refreshPage}>
                                New Chat
                            </button>  
                            <button className="btn btn-margin-left btn-lg btn-primary mb-2 z-1" onClick={routeHome}>
                                Return to Home
                            </button> 
                        </div>
                    </div>
                    :
                    <div class="pt-1 justify-content-center text-center">
                        <div class="d-inline p-2">
                            <input class="form-control-lg w-75" type="text" placeholder="Send a message." aria-label=".form-control-lg example" 
                                disabled={!init}
                                onChange={(evt) => {
                                    setInput(evt.target.value)
                                }}
                            />
                        </div>
                        <div class="d-inline p-2">
                            <button className="btn btn-lg btn-success mb-2 z-1"
                                onClick={() => {
                                    if (!input){
                                        return;
                                    }
                                    components.push([1, input]);
                                    callFromApiFriend(
                                        [...components, input].map((value, index) => {
                                            if (index == 0){
                                                return "The first thing you say is: " + value[1];
                                            } else if (value[0] == 0){
                                                return "I respond: \"" + value[1] + "\""
                                            } else {
                                                return name + " says: \"" + value[1] + "\""
                                            }
                                        }).join('\n') + `\nI say:`
                                        , 
                                        name,
                                        numInteractions+1
                                    ).then(function(response) {
                                        if (response.ok){
                                            return response.text()
                                        }
                                        return null
                                    }).then(function(value) {
                                        components.push([0, value.trim().replace(/"/g, '')])
                                        setNumInteractions(numInteractions + 1)
                                    })
                                }}
                            >
                                Send
                            </button>  
                            <button className="btn btn-margin-left btn-lg btn-danger mb-2 z-1"
                                onClick={() => {
                                    setEnd(true);
                                    callFromApi(
                                        [...components, input].map((value, index) => {
                                            if (index == 0){
                                                return "I say: " + value[1];
                                            } else if (value[0] == 0){
                                                return "I say: " + value[1];
                                            } else {
                                                return name + " says: " + value[1];
                                            }
                                        }).join('\n') + `\nHow did ${name} do in this conversation. Give positive and negative feedback for how ${name} can improve in conversations.`
                                        , 
                                        name,
                                        numInteractions
                                    ).then(function(response) {
                                        if (response.ok){
                                            return response.text()
                                        }
                                        return null
                                    }).then(function(value) {
                                        components.push([0, value.trim().replace(/"/g, '')])
                                        setNumInteractions(numInteractions + 1)
                                    })
                                }}
                            >
                                Stop
                            </button> 
                        </div>
                    </div>
                    }
            </div>
        </footer>
        :
        null
        }
    </div>
}


export default ChatScreen;