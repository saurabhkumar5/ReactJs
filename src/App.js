import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import data from './data';
function App(){
    let login = false;
    // if(login==false){
    //   return <h1>ja mai tujhe nhi dikhega</h1>
    // }

//jsx k andar direct termnary operator or if else use nhi kar sakte h

  return (
    <div className='App'>
      {
        login == true ? <h1 style={{color:"black"}}>ja bhai yha se</h1>:<h1 style={{color:"black"}}>ja dekh le</h1>
      }
      <Header/>
      <div className='main'>
        {
        data.map((element,index)=>{
          return (
            <Movie
            key = {index}
             title = {element.Title}
             year = {element.Year}
             img = {element.Poster}         
            />
          )
        })
          
        }
        
        
      </div>

      
    </div>

  );

}

export default App;