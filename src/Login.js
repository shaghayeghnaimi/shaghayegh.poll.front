import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "./Login.css";
export default function Login() {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [userErr, setUserErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [incorrectUserOrPass, setIncorrectUserOrPass] = useState("");

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

  const login = async () => {
    setUserErr("");
    setPassErr("");
    if (email === "" || pass === "") {
      setUserErr("email is required.");
      setPassErr("Password is required.");
      return;
    }
    setIncorrectUserOrPass("");
    const data = await axios
      .post("http://localhost:3004/login", loginPayload)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        if (token) {
          localStorage.setItem("token", token);
          setAuthToken(token);
          navigate("/PollCreate");
        } else {
          setUsername("");
          setPassword("");
        }
        return data;
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setIncorrectUserOrPass("Invalid Username or Password");
        }
      });
  };
  return (
    <div className="login-body">
      <div className="login-main">
        <h1 className="login-h1">Log-in to your account</h1>

        <div style={{color:"red", margintop:"32px", textAlign:"center"}}><span >{incorrectUserOrPass}</span></div>
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
          <div style={{color:"red", marginLeft: "32px", marginTop:"16pxx"}}>
          <span> {email === "" ? userErr : ""}</span>
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
          <div style={{color:"red", marginLeft: "32px", marginTop:"16pxx"}}>
          <span> {pass === "" ? passErr : ""}</span>
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
