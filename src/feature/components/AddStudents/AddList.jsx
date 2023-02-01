import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


function AddList() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [teams, setTeams] = useState('');
  
  const hdlSearchNameChange = (event) => {
    setName(event.target.value);
  };
  const hdlSearchEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const hdlSearchTeamsChange = (event) => {
    setTeams(event.target.value);
  };
  const hdlSearchGenderChange = (event) => {
    setGender(event.target.value);
  };
  
  const hdlSubmitForm = (e) => {
    e.preventDefault()
        async function fetchAdd() {
            let body = {
              name: name,
              email: email,
              teams: teams,
              gender: gender,
            }
          try {
            const requestUrl = 'http://localhost:8080/categories'
            const response = await fetch(requestUrl, {
              method: "post",
              headers:{
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(body),
            });
            const responseJSON = await response.json();
            console.log({ responseJSON });  
            console.log(body);
            setName("");
            setEmail("");
            setGender();
            setTeams();
          } catch (error) {
            console.log("loi r", error);
          }
        }       
        fetchAdd();
    }
    const teamlist = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5'];
  
    return (
      <div id="addStudentWrapper">
      <h1 className="title">Add Student</h1>

      <form className="mainform">
        <div className="form-group  name">
          <TextField id="standard-basic" value={name} label="Name" variant="standard" onChange={(e) => hdlSearchNameChange(e)}  />
        </div>
        <p></p>
        <div className="form-group mail">
          <TextField id="standard-basic" value={email} label="Email" variant="standard" onChange={hdlSearchEmailChange} />
        </div>

        <p></p>
        <p></p>
        
        <div className="form-group select-inp-container">
          <div className="select-inp pickteam">
            {/* <p>Pick a team</p> */}
            <TextField
          id="outlined-select-currency"
          select
          label="Select"
          // value={currency}
          onChange={hdlSearchTeamsChange}
          helperText="vui lòng chọn ^^"
        >
          {teamlist.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>  
          </div>
                 
          <p></p>
        <p></p>

          <div className="select-inp gender">
            {/* <p>Choose a gender</p> */}
            <div>
              <input type="radio" name="gender" value="F" onClick={hdlSearchGenderChange}></input> Female
            </div>
            <div>
              <input type="radio" name="gender" value="M"  onClick={hdlSearchGenderChange}></input> Male
            </div>
          </div>
        </div>

          <br></br>
        <button onClick={(e)=>hdlSubmitForm(e)} className="submit-btn">
          CREATE
        </button>
      </form>
    </div>
    );
}

export default AddList;