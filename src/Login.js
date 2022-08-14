import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "./Login.css";
export default function Login() {
  const [email, setUsername] = useState("");
  const [pass, setPassword] = useState("");

  const loginPayload = {
    email: email,
    pass: pass,
  };
  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  const login = () => {
    axios
      .post("http://localhost:3004/login", loginPayload)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setAuthToken(token);
      })
      .catch((error) => console.log("error :>> ", error));
  };
  return (
    <div className="login-body">
      <div className="login-main">
        <h1 className="login-h1">Log-in to your account</h1>
        <form>
          <div className="login-textdiv">
            <p className="login-label">Enter your E-mail</p>
            <TextField
              style={{ width: "100%" }}
              required
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              id="filled-required"
              label="Username"
              variant="outlined"
            />
          </div>
          <div className="login-textdiv">
            <p className="login-label">Enter your password</p>
            <TextField
              style={{ width: "100%" }}
              required
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
              id="filled-required"
              type="password"
              label="Password"
              variant="outlined"
            />
          </div>
          <div className="login-button">
        {/* <Link to="/PollCreate"> */}
            <Button
              style={{ width: "100%" }}
              variant="contained"
              onClick={login}
            >
              Log in
            </Button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}
