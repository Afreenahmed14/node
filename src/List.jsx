import React from 'react'

const List = () => {
    const courses = ["MangoDb","Express js","Node js"]
  return (
    <div>
        <ul>
            {
                courses.map((item,index) =>(
                    <li key={index}>    {item}     </li>
                )
            )
            }
        </ul>
        {/* <h2>My friends</h2>
        <ul>
        <li>Afreen</li>
        <li>Sariya</li>
        <li>Sameer</li>
        <li>Shifa</li>
      </ul> */}
    </div>
  )
}

export default List
