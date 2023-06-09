import './App.css';
import Header from './Header';

function App(){
  let name = "maurya";
  return (
    <div className="App">
      <Header/>
      <h1> {name}</h1>
      
    </div>

  );

}

export default App;