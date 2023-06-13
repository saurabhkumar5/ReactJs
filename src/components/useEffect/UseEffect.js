import React, { useEffect,useState } from 'react'

const UseEffect = () => {

    const [count, setSount] = useState(0)

    // const lick = ()=>{  //es function ko direct button me onClick me likh sakte h
    //     setSount(count+1);
    // }


    useEffect(()=>{
        document.title = `Chats (${count})`
    });
    console.log('sumit');
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setSount(count+1)}>click</button>
    </div>
  )
}

export default UseEffect