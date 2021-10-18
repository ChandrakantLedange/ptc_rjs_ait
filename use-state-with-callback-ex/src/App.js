import React from 'react';
import {useStateWithCallbackLazy} from 'use-state-with-callback';

export default function App() {
  const [count, setCount] = useStateWithCallbackLazy(0);

  const handleClick=()=>{
    setCount(count + 1,(latestCount)=>{
      console.log("Hello",latestCount);
    })
  }
  return (
    <div>
      <h1>{count}</h1>
      <butto onClick={handleClick}>Click</butto>
    </div>
  )
}
