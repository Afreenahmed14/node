import React, { useState } from 'react'

const Greed = () => {
const[name,setName]=useState();

const handleChange =(e) =>{
    setName(e.target.value)
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);   
    
}
  return (
    <div>
      <input type="text" placeholder='Enter the name' value={name} onChange={handleChange}/>
      <p>Welcome to home  {name}</p>
      
    </div>
  )
}

export default Greed
