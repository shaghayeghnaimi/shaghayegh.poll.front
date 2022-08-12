import React from "react";
import "./PollManage.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function PollManage() {
  return (
    <div className="manage-body">
      <div className="manage-field">
        <div className="manage-container">
          <h1 className="create-h1">New Poll</h1>
          <TextField
            style={{ width: "100%", marginTop: "40px", marginBottom: "32px" }}
            required
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            id="filled-required"
            label="Title"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginBottom: "64px" }}
            required
            // value={desc}
            // onChange={(e) => setDesc(e.target.value)}
            id="filled-required"
            label="Description"
            variant="outlined"
          />
        </div>
        <div className="manage-button">
          <Button style={{ color: "blue" }} variant="contained">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
