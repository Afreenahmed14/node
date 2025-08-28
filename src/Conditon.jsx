import React from 'react'
import { useState } from 'react'
const Conditon = ({isLoggedIn}) => {
 const [islogIn, setlogIn] = useState(isLoggedIn);
    const handleClick =() =>{
        setlogIn(!islogIn)
    };
let mess;
if(islogIn){
        mess = <p>Welcome user</p>
}else{
    mess = <p>please login</p>
}
return (
  <div>
    <button type='submit' onClick={handleClick}>Login</button>
    {mess}
  </div>
  )
}
export default Conditon;
