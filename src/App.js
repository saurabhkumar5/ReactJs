
import './App.css';

function App() {
  let name = 'react app'
  return (
    <div className="App">
      <div className='App-header'>
              {name}
              {/* Hello World */}
              <Demo></Demo>
      </div>
      
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <div className='App-header'>
              Demo
      </div>
      
    </div>
  );
}


export default App;
