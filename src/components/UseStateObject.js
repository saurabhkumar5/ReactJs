import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, setmyObject] = useState({
        myName:"Saurabh Maurya",myAge:46,degree:"B.tech"
    })
    // const ChangeObject = ()=>{
    //      setmyObject({myName:"Sumit Maurya",myAge:86,degree:"Bsc"})
    // }
    //we will use spread opreator
    const ChangeObject = ()=>{
        setmyObject({...myObject,myName:"Sumit Maurya"})
   }
  return (
    <div>
        <h1>Name: {myObject.myName} & age: {myObject.myAge} & degree:{myObject.degree}</h1>
        <button className='btn' onClick={ChangeObject}>update</button>
    </div>
    
  )
}

export default UseStateObject