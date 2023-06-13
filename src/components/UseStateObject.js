import React,{useState} from 'react'

const UseStateObject = () => {
    const myBioData = [
        {
            id:0, myName:"Saurabh",myAge:23
        },
        {
            id:1, myName:"Sumit", myAge:45
        }
    ]
    const [first, setfirst] = useState(myBioData)
    const lolo = ()=>{
        setfirst([]);
    }
    const rom = (id)=>{
        // alert(id);
        const myNewArray = first.filter((curElem)=>{
            return curElem.id==!id
        })
        setfirst(myNewArray);
    }
  return (
    <div>
        {
            first.map((ele)=>{
               return <h1 key={ele.id}>Name:{ele.myName} & age:{ele.myAge} <button className='btnn' onClick={()=>rom(ele.id)}>remove</button></h1>
            })
        }
        <button className='btn' onClick={lolo}>Clear</button>
    </div>
  )
}

export default UseStateObject