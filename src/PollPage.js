import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import Checkbox from "@mui/material/Checkbox";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

export default function PollPage() {
  const [name, setName] = useState("");
  const [participents, setParticipents] = useState([]);
  const [allParticipents, setAllParticipents] = useState([]);
  const [data, getData] = useState("");
  const [id, setId] = useState("");
  const [choice, setChoice] = useState([]);
  const [items, setItems] = useState([]);
  const[participentChoice, setParticipentChoice] = useState("")

  const token = localStorage.getItem("token");

  const getPollById = () => {
    axios
      .get(`http://localhost:3004/poll/${id}`, {
        params: {
          id: id,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const result = response.data[0];
        console.log("result11 :>> ", result);
        getItemsByPollId(id);
        getParticipants(id);
        getData(result);
        console.log("response :>> ", response);
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  };
  const getItemsByPollId = (id) => {
    axios
      .get(`http://localhost:3004/choice/id/${id}`, {
        params: {
          id: id,
        },
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const result = response.data;
        setItems(result);
      })
      .catch((Err) => {
        console.log("Err :>> ", Err);
      });
  };
  const getParticipants = () => {
    axios
      .get(`http://localhost:3004/participent/${id}`, {
        params: {
          id: id,
        },
      })
      .then((response) => {
        console.log("get participants :>> ", response.data);
        setAllParticipents(response.data);
       
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  };

  // const newParticipent = () => {
  //   setParticipents(participents.concat(""));
  // };

  const createParticipent = () => {
    const Participentdata = {
      poll_id: id,
      name: name,
    };
    let config = {
      method: "post",
      url: "http://localhost:3004/participent/",
      headers: {
        "Content-Type": "application/json",
      },
      data: Participentdata,
    };
    axios(config)
      .then((response) => {
        // setParticipentId(response.data.insertId);
        setParticipentChoice(response.data.insertId);
        
        createParticipentChoice()
        getParticipentChoice()
      })
      .then.catch((error) => {
        console.log("participnt error :>> ", error);
      });
  };




  const createParticipentChoice = () => {
    const participentChoice1= participentChoice++
    const ParticipentChoicedata = {
      item_id: 1,
      participent_id: participentChoice1,
    };

    console.log('ParticipentChoicedata :>> ', ParticipentChoicedata);
    let config = {
      method: "post",
      url: "http://localhost:3004/choices/",
      headers: {
        "Content-Type": "application/json",
      },
      data: ParticipentChoicedata,
    };
    axios(config)
      .then((response) => {
        // setParticipentId(response.data.insertId);
        // setName(response.data);
        console.log('responserrrrrrrrrr :>> ', response);
      })
      .then.catch((error) => {
        console.log("participnt error :>> ", error);
      });
  };


  const getParticipentChoice = (id) => {

    let config = {
      method: "get",
      url: `http://localhost:3004/choices/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((response) => {
        // setParticipentId(response.data.insertId);
        // setName(response.data);
        console.log('resoooooooo :>> ', response);
        setAllParticipents(response)
      })
      .then.catch((error) => {
        console.log("participnt error :>> ", error);
      });
  };



  
  const addName = () => {
    if (name === "") {
      return;
    }
    setParticipents(() => {
      return [name];
    });
  };



  const handleOptions = (value, index) => {
    items[index] = value;
    setItems(items);
  };

  const handleInput = (value, index) => {
    const namesCopy = name;
    namesCopy[index] = value;
    setName(namesCopy);
  };
  return (
    <div style={{ padding: "20px" }}>
      <TextField
        style={{
          width: "100%",
          marginTop: "40px",
        }}
        required
        value={id}
        onChange={(e) => setId(e.target.value)}
        id="filled-required"
        label="Poll Number"
        variant="outlined"
        onBlur={getPollById}
      />

      <p style={{ textAlign: "center", fontSize: "20px" }}>
        <span style={{ textAlign: "center", fontSize: "20px" }}>Title:</span>{" "}
        <span> </span>
        <span></span> <b style={{ fontSize: "24px" }}>{data.title}</b>
      </p>
      <p style={{ textAlign: "center", fontSize: "16px" }}>
        <span>Description:</span>
        <b style={{ textAlign: "center" }}> {data.description}</b>
      </p>

      <TableContainer
        component={Paper}
        sx={{ marginTop: "50px", marginBottom: "10px" }}
      >
        <Table style={{ minWidth: "700px" }}>
          <TableHead style={{ color: "white", textAlign: "left" }}>
            <tr style={{ backgroundColor: "#04485C" }}>
              <th style={{ fontWeight: "bold" }}>Participent</th>
              {items.map((item, index) => {
                return (
                  <th
                    align="center"
                    key={index}
                    style={{ color: "white" }}
                    onChange={(e) => handleOptions(e.target.value, index)}
                  >
                    {item.item}
                  </th>
                );
              })}
            </tr>
          </TableHead>
          <tbody>
            {participents.map((name, index) => (
              <tr key={index}>
                <td>
                  <p onChange={(e) => handleInput(e.target.value, index)}>
                    {participents}
                  </p>
                </td>
                {items.map((choice, index) => {
                  return (
                    <td align="center" key={index}>
                      <input
                        value={choice}
                        onChange={(e) => setChoice(e.target.value, index)}
                        type="checkbox"
                      
                      />
             
                    </td>
                  );
                })}
              </tr>
            ))}
            <div style={{ marginTop: "16px" }}>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ width: "200px" }}
                size="small"
                label="Name:"
              />
            </div>
            <div>
              <p>{participents.name}</p>
            </div>
          </tbody>
          {/* <tbody>
//             <tr>
//               <td>
//                 <TextField
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   sx={{ width: "200px" }}
//                   size="small"
//                   label="Your Name"
//                 />
//                 {participents.map((names, index) => {
//                   return (
//                     <tr>
                 
//                       <hr />
//                       <td> {names}</td>
//                       <td>
//                       <FormControl>
//                         <RadioGroup
//                           row
//                           aria-labelledby="demo-row-radio-buttons-group-label"
//                           name="row-radio-buttons-group"
//                           value={choice}
//                           onChange={(e) => handleChoices(e.target.value, index)}      >
//                           <FormControlLabel value={choice} control={<Radio />} />
                        
//                         </RadioGroup>
//                       </FormControl>

//                     </td>
//                </tr>
                 
//                  );

//                 })}
//               </td>







//               {/* {items.map((choice, index) => {
//                   return (
//                     <td align="center" key={index}>
                     
//                     </td>
//                   );
//                 })} */}
          {/* {allParticipents.map((item, index) => {
//                 return (
//                   <td
//                     align="center"
//                     key={index}
//                     style={{ color: "black" }}
//                   >
//                     <p>{item.item}</p>
//                     {item.name}
//                   </td>
//                 );
//               })} */}
          {/* </tr> */} {/* </tbody> */}{" "}
        </Table>
      </TableContainer>
      <Button
        style={{ marginRight: "5px" }}
        variant="contained"
        color="primary"
        size="medium"
        onClick={addName}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={createParticipent}
      >
        Submit
      </Button>
    </div>
  );
}
