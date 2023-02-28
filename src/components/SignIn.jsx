import React, { useState} from 'react'

export default function SignIn(){
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    return(
        <>
            <input  className='input'
                    type='text' 
                    placeholder='username' 
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                    
            />
            <input  className='input'
                    type='password' 
                    placeholder='password' 
                    value={password} 
                    onChange={(e) => {setPassword(e.target.value)}}
                   
            />
            <button>Submit</button>
        </>

    )
}