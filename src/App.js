import './App.css';
import React,{useState} from 'react';

const App = () => {

  // console.log(useState); //function return karega
  // console.log(useState()); //ek array return karega,[undefined,f], eska matlab bracket me kuch likhenge to wo zero index par aa jayega
  //console.log(useState('suman')); //op => ['suman',f]

  // let firstValue = useState("raman")[0];
  // console.log(firstValue);

  //var val = 'saurabh maurya';

  //ab use karna useState ka, useState hamesha return k upar hi use hoga

  const [myName,setMyName] = useState('saurabh maurya')


  const changeName = ()=>{
    
      //  val = 'sumit'
      //  console.log(val);
      setMyName('sumit maurya');
  }
      console.log(myName);

  return (
    <div className='App'>
      {/* <h1>saurabh maurya</h1> */}
      <h1>{myName}</h1>
      <button onClick={changeName}>click</button>
    </div>
  )
}

export default App


