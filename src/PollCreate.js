import React from "react";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import "./PollCreate.css"




export default function PollCreate() {
  const [option, setOption] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [newDesc, setNewDesc] = React.useState([]);
  const [newTitle, setNewTitle] = React.useState([]);
  const [newOptions, setNewOptions] = React.useState([]);

  const addOption = () => {
    if (option === "") {
      return;
    }
    setNewOptions((item) => {
      return [...item, option];
    });

    setOption("");
  };

  const deleteOption = (currentOption) => {
    setNewOptions((options) =>
      options.filter((option) => currentOption !== option)
    );
  };

  const createPoll = () => {
    if (desc === "" && title === "") {
      return;
    }
    setNewTitle(() => {
      return [title];
    });
    setNewDesc(() => {
      return [desc];
    });

    setDesc("");
    setTitle("");
  };

  return (
    <div className="create-body">
      <div className="create-container">
        <h1>New Poll</h1>
        <TextField
          style={{ width: "100%", marginTop: "64px" ,marginBottom: "32px"}}
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
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          id="filled-required"
          label="Description"
          variant="outlined"
        />
        <TextField
          style={{ width: "100%" , marginBottom: "32px" }}
          value={option}
          onChange={(e) => setOption(e.target.value)}
          label="Option"
          variant="outlined"
        />
        <IconButton onClick={addOption} color="primary">
          <AddCircleIcon />
        </IconButton>
      </div>
      <div style={{ marginLeft: "33%" }}>
        <List
          style={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            textAlign: "center",
          }}
        >
          {newOptions.map((option) => {
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

          {newDesc.map((desc) => {
            return <div key={desc}>{desc}</div>;
          })}
          {newTitle.map((title) => {
            return <div key={title}>{title}</div>;
          })}
        </List>
        <div className="create-button">
        <Button
          style={{ color: "blue" }}
          variant="outlined"
          onClick={createPoll}
          startIcon={<AddIcon />}
        >
          Create
        </Button>
        </div>
      </div>
    </div>
  );
}
