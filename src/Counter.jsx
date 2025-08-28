import React, { useState } from 'react'
const Counter = () => {
  const [count,setCount]= useState(0);
  const [val,setVal]=useState(0);
  const handleClick = () =>{
    setCount(count+1)
  }
  const handleCall = () =>{
    setVal(val-1)
  }
  return (
    <div>
      <button type='button' onClick={handleClick} style={{color:"white", background:"blue"}}>click+</button>
      <p>the count is {count}</p>
      <button type='button' onClick={handleCall}>click-</button>
      <p>the count is {val}</p>
    </div>
  )
}

export default Counter

