import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Fields from "./components/Fields";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data,setData] = useState([])

  const addData = ()=>{
    // setData({
    //   // name: name,
    //   // email: email
    //   //or
    //   name,email
    // })
    setData([...data, {name,email}]);
    setName("");
    setEmail("");
  }

  return (
    <div className="App">
      <Header />
      {/* form */}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event)=>setName(event.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element,index)=>{
            return (
              <Fields key={index} name = {element.name} email = {element.email} index = {index}/>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
