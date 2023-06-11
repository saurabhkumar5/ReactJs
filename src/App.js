import './App.css';
import Comp from './components/Comp';
function App(){
  return (
    <div>
      {/* <Comp title = "React is a community."/> */}
      {/* <Comp title = "Tutorial: Tic-Tac-Toe"/> */}
      {/* <Comp title = "Quick Start"/> */}
      {/* <Comp title = "Start a New React Project"/> */}
      {/* <Comp title = "Thinking in React"/> */}

      {/* <Comp/> */}
      {/* <Comp/> */}

      <Comp 
       title = "React is a community."
       content = "content1"
      />
      <Comp 
       title = "Tutorial: Tic-Tac-Toe"
       content = "content2"
      />
      <Comp
       title = "Quick Start"
       content = "content3"
      />
      <Comp
       title = "Start a New React Project"
       content = "content4"
      />
    </div>

  );

}

export default App;