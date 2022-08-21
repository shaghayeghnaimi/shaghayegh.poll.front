import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PollList.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditText } from "react-edit-text";
import Tooltip from "@mui/material/Tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";


function PollList() {
  const [data, getData] = useState([]);
  const [editTitle, setEditTitle] = useState(data.title);
  const [editDesc, setEditDesc] = useState(data.description);
  const [copied, setCopied] = useState(false);

  const URL = "http://localhost:3004/poll/";
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => res.json())

      .then((response) => {
        getData(response);
      });
  };

  function deleteRow(id, e) {
    axios.delete(`http://localhost:3004/poll/${id}`).then((res) => {
      console.log(res.data);
      const posts = data.filter((item) => item.id !== id);
      getData({ posts });
    });

    window.location.reload();
  }
  const edittitle = (id, e) => {
    const dataPoll = {
      title: editTitle,
    };

    const token = localStorage.getItem("token");
    const config = {
      method: "patch",
      url: `http://localhost:3004/poll/title/${id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      data: dataPoll,
    };
    console.log("editBox :>> ", dataPoll);
    axios(config)
      .then((res) => {
        console.log("res :>> ", res);
        const postTitles = editTitle.map((item) => item.id !== id);
        getData({ postTitles });
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
    window.location.reload();
  };
  const editDescription = (id, e) => {
    const dataPoll = {
      description: editDesc,
    };

    const config = {
      method: "patch",
      url: `http://localhost:3004/poll/description/${id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      data: dataPoll,
    };
    console.log("editBox :>> ", dataPoll);
    axios(config)
      .then((res) => {
        console.log("res :>> ", res);
        const postDesc = editDesc.map((item) => item.id !== id);
        getData({ postDesc });
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
    window.location.reload();
  };

  return (
    <div className="list-body">
      <h1>Poll List</h1>

      <div className="list-container">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Description</th> <th>Link</th> <th>Number of Participent</th>
            <th></th>
          </tr>

          {data.map((item, i) => (
            <tr key={i}>
              <td onChange={(e) => setEditTitle(e.target.value)}>
                <Tooltip title="Click on me to Edit!" followCursor>
                  <span>
                    {" "}
                    <EditText
                      className="edit-text"
                      name="textbox1"
                      defaultValue={item.title}
                      onBlur={(e) => edittitle(item.id, e)}
                    />{" "}
                  </span>
                </Tooltip>
              </td>
              <td onChange={(e) => setEditDesc(e.target.value)}>
                <Tooltip title="Click on me to Edit!" followCursor>
                  <span>
                    {" "}
                    <EditText
                      className="edit-text"
                      name="textbox7"
                      defaultValue={item.description}
                      onBlur={(e) => editDescription(item.id, e)}
                    />
                  </span>
                </Tooltip>
              </td>

              <td>http://localhost:3004/poll/{item.id} </td>

              <td>{item.numOfParticipent}</td>

              <td>
                {" "}
                <IconButton
                  aria-label="delete"
                  color="primary"
                  onClick={(e) => deleteRow(item.id, e)}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}

export default PollList;
