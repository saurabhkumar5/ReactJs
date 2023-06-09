// import Header from './Header';
// import {Header,Footer} from './Header'; //multile function import
//import Header,{Footer} from './Header'; //default and object ko ek saath import kiya h
import Header from './Header';

function App(){
  let name = "maurya";
  return (
    <div className="container">
      <Header/>
      <h1> {name}</h1>

      {/* <footer/> small f use karenege to jsx samejhega ye mere hi andar ka h bahar ka nhi esliye capital likhte h */}
      {/* /* <Footer /> */ }
      
    </div>

  );

}

export default App;