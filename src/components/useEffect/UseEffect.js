import React, { useEffect,useState } from 'react'

const UseEffect = () => {

    const [count, setSount] = useState(0)

    // const lick = ()=>{  //es function ko direct button me onClick me likh sakte h
    //     setSount(count+1);
    // }


    useEffect(()=>{
        if(count>=1){
            document.title = `Chats (${count})`
        }
        else{
            document.title = `Chats`
        }
    // });
},[count]);


useEffect(()=>{
    if(count>=1){
        document.title = `Chats (${count})`
    }
    else{
        document.title = `Chats`
    }
// });
},[count]);
   
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setSount(count+1)}>click</button>
    </div>
  )
}

export default UseEffect