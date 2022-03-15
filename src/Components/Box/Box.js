import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Box.css";
import  Button  from "@mui/material/Button";

function Boxes() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="main-container">
        <div className="inpt_align">
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />

          <TextField
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
           <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div className="inpt_align">
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />

          <TextField
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
           <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div className="inpt_align">
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />

          <TextField
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
           <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div className="inpt_align">
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />

          <TextField
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
           <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        
      </div>
      <div className="btn">

      <Button variant="contained" type="submit">submit</Button> 
        </div>
    </Box>
  );
}

export default Boxes;
