import React,{useState} from 'react'
import {MyContext} from './context/MyContext';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  const [userName, setUserName] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <div>
      <MyContext.Provider
      value={{userName,setUserName,showProfile,setShowProfile}}
      >
        {showProfile? <Profile/>:<Login/>}
      </MyContext.Provider>
    </div>
  )
}

export default App
