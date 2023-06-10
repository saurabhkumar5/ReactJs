import './App.css';
import Student from './components/Student';
function App(){
  return (
    <div className="App">
      <Student 
       name = "saurabh"
       age = {20}
      />
      <Student 
       name = "sumit"
       age = {10}
      />
      <Student 
       name = "sanchi"
       age = {18}
      />
      
    </div>

  );

}

export default App;