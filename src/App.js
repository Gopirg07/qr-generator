import logo from "./logo.svg";
import "./App.css";
import QRCode from "react-qr-code";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

function App() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="App container">
      <h1>Qr Code Generator</h1>
      <div style={{alignItems:"center"}} className="row">
        <div className="col-md-6 details-div">
          <p style={{textAlign:"start"}}>Enter The Data</p>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

          <div className="h-w-div">
            <div>
              <p>Height</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>

            <div>
              <p>width</p>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>
          </div>
          <div className="qrc-div">
            <p>QR Color : </p>
            <input type="color" />
          </div>
          <div className="qrc-div">
            <p>Background Color : </p>
            <input type="color" />
          </div>
          <div className="format-select">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="btnss">
            <Button color="success" variant="contained">
              Generate
            </Button>
            <Button variant="contained">Download</Button>
          </div>
        </div>
        <div className="qr-main col-md-6">
          <QRCode style={{height:"400px",width:"400px"}} value="Gopinath" />
        </div>
      </div>
    </div>
  );
}

export default App;
