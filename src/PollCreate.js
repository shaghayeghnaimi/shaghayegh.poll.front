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
  const [titleErr, setTitleErr] = React.useState("");
  const [descErr, setDescErr] = React.useState("");

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

  const dataPoll = JSON.stringify({
    title: title,
    description: description,
    link: "uniqueLink",
  });

  const createUniqueLink = (id) => {
    return `http://localhost:3004/poll/${id}`;
  };

  const createPoll = () => {
    setTitleErr("");
    setDescErr("");
    if (title === "" || description === "") {
      setTitleErr("Title is required.");
      setDescErr("Description is required.");
      return;
    }

    const token = localStorage.getItem("token");
    const config = {
      method: "post",
      url: "http://localhost:3004/poll/",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      data: dataPoll,
    };

    axios(config)
      .then((res) => {
        const id = res.data.insertId;
        console.log("id :>> ", id);
        createItems(id);
        const uniqueLink = createUniqueLink(id + 1);
        setUniqueLink(uniqueLink);
      })
      .catch((error) => console.log("error :>> ", error));

    setDesc("");
    setTitle("");
    setItem("");
  };
  const createItems = (insertId) => {
    const token = localStorage.getItem("token");
    const myItems = newItems.map((item) => {
      return { poll_id: insertId, item: item };
    });

    const config = {
      method: "post",
      url: "http://localhost:3004/choice/",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      data: myItems,
    };
    axios(config)
      .then((response) => {
        console.log("response :>> ", response);
      })
      .catch((Err) => {
        console.log("Err :>> ", Err);
      });
  };

  return (
    <div className="create-body">
      <div className="create-field">
        <div className="create-container">
          <h1 className="create-h1">New Poll</h1>
          <TextField
            style={{
              width: "100%",
              marginTop: "40px",
              marginBottom: titleErr ? "0px" : "32px",
            }}
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="filled-required"
            label="Title"
            variant="outlined"
          />
          <div style={{ color: "red", marginBottom: "32px" }}>
            <span> {title === "" ? titleErr : ""}</span>
          </div>
          <TextField
            style={{ width: "100%", marginBottom: descErr ? "0px" : "32px" }}
            required
            value={description}
            onChange={(e) => setDesc(e.target.value)}
            id="filled-required"
            label="Description"
            variant="outlined"
          />
          <div style={{ color: "red", marginBottom: "32px" }}>
            <span> {description === "" ? descErr : ""}</span>
          </div>
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
