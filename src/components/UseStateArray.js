import React, { useState } from 'react'

const UseStateArray = () => {

  const bioData = [
    {
      id:0, myName:"Saurabh", age:56
    },
    {
      id:1, myName:"maurya", age:57
    },
    {
      id:2, myName:"sumit", age:44
    }
  ]
  const [myArr,changeMyArr] = useState(bioData);
    const fnct = ()=>{
         changeMyArr([]);
    }

  return (
    <div>
        
        {
          myArr.map((ele)=>{
            return <h1>name:{ele.myName} & age:{ele.age}</h1>

          })
        }
        <button onClick={fnct}>clear</button>
    </div>
  )
}

export default UseStateArray