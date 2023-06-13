import React,{useState} from 'react'

const ShortCircuit = () => {
   const [demo, setDemo] = useState('muli')
  return (
    <div>
        <h1>{demo || "Saurabh"}</h1>
        <h1>{demo && "sumit"}</h1>
    </div>
  )
}

export default ShortCircuit