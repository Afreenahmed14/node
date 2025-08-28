import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [logIn, setLogIn] = useState(false);
    const handleClick =() =>{
        setLogIn(!logIn)
    }
  return (
    <div>
      <button type='button' onClick={handleClick}>
        {logIn?'Log Out':'Log In'}</button>
      {/* {logIn?<p>Logged In</p>:<p>Please login</p>} */}
      {logIn && <p>logged in</p>}
    </div>
  )
}

export default Login
