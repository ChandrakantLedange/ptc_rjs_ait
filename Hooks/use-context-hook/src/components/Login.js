import React,{useContext} from 'react'
import {MyContext} from '../context/MyContext'

function Login() {

    const {setUserName,setShowProfile}  = useContext(MyContext);
   
    return (
        <div>

        <fieldset>
            <legend>Login</legend>
            <input type='text' placeholder="user name"
            onChange={(e)=>setUserName(e.target.value)}
            ></input>
            <br/> <br/>
            <button onClick={()=>{setShowProfile(true)}}>Login</button>
        </fieldset>
            
        </div>
    )
}

export default Login
