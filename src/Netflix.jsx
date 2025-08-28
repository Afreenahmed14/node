import React from 'react'
const Netflix = ({issubs}) => {
let subs;
if(issubs=="premium"){
  subs = <p>This is your premium subcription</p>
}else if(issubs=="standard"){
  subs = <p>This is standard subcription</p>
}
else{
  subs = <p>You are not able to access netflix pleas subscribe</p>
}
  return (
    <div>
       {subs}
      
    </div>
  )
}
export default Netflix
