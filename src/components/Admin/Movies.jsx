import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import './Movies.css'

const Movies = () => {
    var [inputs,setInputs]=useState({
        "MovieID":'',
         "MovieName":'',
         "Discription":'',
         "Language":'',
         "Genre":'Thriller'
     });
     const inputHandler =(event) =>{
        const {name,value}=event.target 
        setInputs((inputs) =>({...inputs,[name]:value}))
        console.log(inputs)
    }
    const saveData=()=>{
        const formdata=new FormData();
        formdata.append('MovieId',inputs.MovieID);
        formdata.append('MovieName',inputs.MovieName);
        formdata.append('Discription',inputs.Discription);
        formdata.append('Language',inputs.Language);
        formdata.append('Genre',inputs.Genre);

        fetch('http://localhost:3005/new',{
            method:'post',
            body:formdata,
        })
        .then ((response)=>response.json())
        .then ((data)=>{
            alert("record is saved")
        })
        .catch ((err)=>{
            console.log("error")
        })
    }
 
  return (
    <div className='yad'>
      <br/><TextField name="MovieID" label="MovieID"  value={inputs.MovieID} variant="outlined" onChange={inputHandler}/><br/><br/>
      <TextField  name="MovieName"  label="MovieName"  value={inputs.MovieName} variant="outlined" onChange={inputHandler}/><br/><br/>
      <TextField  name="Discription"  label="Discription"  value={inputs.Discription} variant="outlined" onChange={inputHandler}/><br/><br/>
      <FormControl sx={{m:1,minWidth:120}}>
      <InputLabel name="Language" id="demo-simple-select-label">Language</InputLabel>            
      <Select
    labelId="demo-simple-select-label"
    label="Language"
    autoWidth={true}
    onChange={inputHandler}
    name="Language"
   
  >
    <MenuItem value={"English"}>English</MenuItem>
    <MenuItem value={"Malayalam"}>Malayalam</MenuItem>
    
  </Select>
 </FormControl><br/><br/>
      <FormControl sx={{m:1,minWidth:120}}>
      <InputLabel name="Genre" id="demo-simple-select-label">Genre</InputLabel>            
      <Select
    labelId="demo-simple-select-label"
    label="Genre"
    autoWidth={true}
    onChange={inputHandler}
    name="Genre"
   
  >
    <MenuItem value={"Action"}>Action</MenuItem>
    <MenuItem value={"Thriller"}>Thriller</MenuItem>
    <MenuItem value={"Drama"}>Drama</MenuItem>
    <MenuItem value={"Sci-fi"}>Sci-fi</MenuItem>
    <MenuItem value={"Comedy"}>Comedy</MenuItem>
    <MenuItem value={"Horror"}>Horror</MenuItem>
    <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
  </Select>
 </FormControl><br/><br/>
 <Button onClick={saveData} variant='contained'>Submit</Button>
    </div>
  )
}

export default Movies