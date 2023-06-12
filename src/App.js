import React,{useState} from 'react'
import './App.css'

const App = () => {

  const [value,changeValue] = useState('Maurya');

  const fnct = ()=>{
    let val = value;
    // if(val==='Maurya'){
    //   changeValue('Shaurya')
    // }else{
    //   changeValue('Maurya');
    // }

    (val==='Maurya')?changeValue('Shaurya'):changeValue('Maurya');
  }


  return (
    <div className='App'>
      <h1>{value}</h1>
      <button onClick={fnct}>click me</button>
    </div>
  )
}

export default App


