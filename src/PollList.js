import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PollList.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

function PollList() {
  const [data, getData] = useState([]);
  const URL = "http://localhost:3004/poll/";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log("response :>> ", response);

        getData(response);
      });
  };

  function deleteRow(id, e) {
    axios.delete(`http://localhost:3004/poll/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const posts = data.filter((item) => item.id !== id);
        getData({ posts });
    });

      window.location.reload();
  }

  return (
    <>
      <h1>Poll List</h1>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Link</th>
          <th>Number of Participent</th>
          <th></th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.link}</td>
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
              <Link to="/PollManage">
                <IconButton aria-label="Edit" color="primary">
                  <EditIcon />
                </IconButton>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default PollList;
