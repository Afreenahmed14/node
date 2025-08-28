import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Conditon from './Conditon'
import Netflix from './Netflix'
import List from './List'
import School from './School'
function App() {
return (
<div>
<Login/>
<Conditon isLoggedIn={true}/> 
<Netflix issubs="premium"/>
<List/>
{/* <School/> */}
</div>
  )
}

export default App
