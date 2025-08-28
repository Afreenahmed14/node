import React from 'react'
import Child from './Child'
import Secondchild from './Secondchild'
const Parent = () => {
  return (
    <div>
      <h1>i am a parent class</h1>
      <Child/>
      <Secondchild name="Afreen" value="21"/>
    </div>
  )
}

export default Parent
