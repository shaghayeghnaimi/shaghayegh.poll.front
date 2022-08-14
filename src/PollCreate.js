import React from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
 import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import "./PollCreate.css";

export default function PollCreate() {
  const [item, setItem] = React.useState("");
  const [uniqueLink, setUniqueLink] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDesc] = React.useState("");
  const [newItems, setNewItems] = React.useState([]);

  const addOption = () => {
    if (item === "") {
      return;
    }
    setNewItems((option) => {
      return [...option, item];
    });

    setItem("");
  };

  const deleteOption = (currentOption) => {
    setNewItems((options) =>
      options.filter((option) => currentOption !== option)
    );
  };
  const dataChoice = {
    item:item
  }
// const dataChoice ={
//   item: item
// }

// const createChoice = () =>{
//     axios
//       .post("http://localhost:3004/PollChoice", dataChoice)
//       .then((res) => {
//         const id = res.choice;
     
//       })
//       .catch((error) => console.log("error :>> ", error));

 
// }
  const dataPoll = {
    title: title,
    description: description,
    link: "jnkbjk.bkjb.kjb"
  };

  const createUniqueLink = (id) => {
    return `http://localhost:3004/poll/${id}`;
  };

  const createPoll = () => {
    const token= localStorage.getItem("token");
if(token){
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
    axios
      .post("http://localhost:3004/poll/", dataPoll)
      .then((res) => {
        const id = res.id;
        const uniqueLink = createUniqueLink(id);
        setUniqueLink(uniqueLink);
      
      })
      .catch((error) => console.log("error :>> ", error));

    setDesc("");
    setTitle("");
    setItem("");
  };

  return (
    <div className="create-body">
      <div className="create-field">
        <div className="create-container">
          <h1 className="create-h1">New Poll</h1>
          <TextField
            style={{ width: "100%", marginTop: "40px", marginBottom: "32px" }}
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="filled-required"
            label="Title"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginBottom: "32px" }}
            required
            value={description}
            onChange={(e) => setDesc(e.target.value)}
            id="filled-required"
            label="Description"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginBottom: "16px" }}
            value={item}
            onChange={(e) => setItem(e.target.value)}
            label="Option"
            variant="outlined"
          />
          <IconButton
            onClick={addOption}
            color="primary"
            style={{ marginBottom: " 40PX" }}
          >
            <AddCircleIcon />
          </IconButton>
        </div>
        <div className="create-result">
        <div>
          {newItems.map((option) => {
            return (
              <div key={option}>
                {option}

                <IconButton
                  onClick={() => deleteOption(option)}
                  style={{ color: "red" }}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            );
          })}

        </div>
      </div>
        <div>
          <div className="create-button">
            <Button
             
              variant="contained"
              onClick={createPoll}
              startIcon={<AddIcon />}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
     
    </div>
  );
}
