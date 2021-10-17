import React,{useContext} from 'react'
import {MyContext} from '../context/MyContext';

function Profile() {
    const {userName} = useContext(MyContext);
    return (
        <div>
            <h1>{userName}</h1>
        </div>
    )
}

export default Profile
