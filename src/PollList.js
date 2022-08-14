import React, { useState, useEffect } from "react";
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
        console.log(response);
        getData(response);
      });
  };

  return (
    <>
      <h1>Poll List</h1>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Link</th>
          <th>Nunber of Participent</th>
          <th></th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.link}</td>
            <td>{item.id}</td>

            <td>
              {" "}
              <IconButton aria-label="delete" color="primary">
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
