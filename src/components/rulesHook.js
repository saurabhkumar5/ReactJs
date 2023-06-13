import React, { useState } from 'react'

const RulesHook = () => {
    const [myName, setMyName] = useState('saurabh');
  return (
    <h1>{myName}</h1>
  )
}

export default RulesHook