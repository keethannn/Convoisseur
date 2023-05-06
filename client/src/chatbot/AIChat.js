import '../App.css'
import Typewriter from 'typewriter-effect'

function AIChat({data, useTypewriter}) {
    console.log(data, useTypewriter)
    return (<div>
                <p1 className='text-white'>
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
                </p1> 
            </div>);
}

export default AIChat