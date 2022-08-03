import React from "react";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';


export default function PollCreate() {
  const [option, setOption] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
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

  return (
    <div className="create-body">
      <div className="create-container">
        <TextField
          style={{ width: "100%" }}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="filled-required"
          label="Title"
          variant="outlined"
        />
        <TextField
          style={{ width: "100%" }}
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          id="filled-required"
          label="Description"
          variant="outlined"
        />
        <TextField
          style={{ width: "100%" }}
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
              <div>
                <p
                  secondaryAction={
                    <IconButton
                      onClick={deleteOption}
                      style={{ color: "red" }}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <Checkbox key={option} />
                  {option}

                  <ListItemText />
                </p>
              </div>
            );
          })}
          <Button
            style={{ marginLeft: "15%", color: "blue" }}
            variant="outlined"
            // onClick={deleteAll}
            startIcon={<AddIcon />}
          >
            Create
          </Button>
        </List>
      </div>
    </div>
  );
}
