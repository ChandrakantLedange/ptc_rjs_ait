import logo from './logo.svg';
import './App.css';
import React,{useRef,useEffect} from 'react';
import Input from './components/Input';

function App() {
const uname = useRef();
const upwd = useRef();
const uemail = useRef();
const submitref = useRef();

useEffect(() => {
  uname.current.focus();
}, []);

function unameFun(e){
  if(e.key === "Enter"){
    upwd.current.focus();
  }
}
function uPwdFun(e){
  if(e.key === "Enter"){
    uemail.current.focus();
  }
}

function uemailFun(e){
  if(e.key === "Enter"){
    submitref.current.focus();
  }
}

function submitFun(e){
  e.preventDefault();
console.log(uname.current.value,upwd.current.value,uemail.current.value);

}


  return (
    <div className="App">
      <lebel>User Name</lebel> <br/>
      <Input type="text" placeholder="user name" onKeyDown={unameFun}
      ref={uname}
      ></Input>
      <br/> <br/>

      <lebel>User Password</lebel> <br/>
      <Input type="text" placeholder="user password" onKeyDown={uPwdFun}
      ref={upwd}
      ></Input>
      <br/> <br/>

      <br/> <br/>

      <lebel>User Email</lebel> <br/>
      <Input type="text" placeholder="user Email" onKeyDown={uemailFun}
      ref={uemail}
      ></Input>
      <br/> <br/>

      <Input type="submit" placeholder="" onKeyDown={submitFun}
      ref={submitref}></Input>


    </div>
  );
}

export default App;
