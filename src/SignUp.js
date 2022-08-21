import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "./Login.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userErr, setUserErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [firstErr, setFirstErr] = useState("");
  const [lastErr, setLastErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const SignupPayload = {
    email: email,
    pass: pass,
    user_name: username,
    first_name: firstname,
    last_name: lastname,
  };

  const Sign_up = async () => {
    setUserErr("");
    setPassErr("");
    setLastErr("");
    setFirstErr("");
    setEmailErr("");

    if (
      email === "" ||
      pass === "" ||
      firstname === "" ||
      lastname === "" ||
      username === ""
    ) {
      setUserErr("Username is required.");
      setPassErr("Password is required.");
      setFirstErr("firstname is required.");
      setLastErr("Lastname is required.");
      setEmailErr("Email is required.");

      return;
    }

    const data = await axios
      .post("http://localhost:3004/user", SignupPayload)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        if (token) {
          navigate("/PollCreate");
          window.location.reload();
        } else {
          setEmail("");
          setPassword("");
          setFirstname("");
          setLastname("");
          setUsername("");
        }
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="login-body">
      <div className="login-main">
        <h1 className="login-h1">Sign up</h1>

        <form>
          <div className="login-textdiv">
            <p className="login-label">Enter your firstname</p>
            <TextField
              style={{ width: "100%" }}
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              id="filled-required"
              label="Firstname"
              variant="outlined"
            />
            <div
              style={{ color: "red", marginLeft: "32px", marginTop: "16pxx" }}
            >
              <span> {firstname === "" ? firstErr : ""}</span>
            </div>
            <p className="login-label">Enter your lastname</p>
            <TextField
              style={{ width: "100%" }}
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              id="filled-required"
              label="lastname"
              variant="outlined"
            />
            <div
              style={{ color: "red", marginLeft: "32px", marginTop: "16pxx" }}
            >
              <span> {lastname === "" ? lastErr : ""}</span>
            </div>
            <p className="login-label">Enter your User name</p>
            <TextField
              style={{ width: "100%" }}
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="filled-required"
              label="Username"
              variant="outlined"
            />
            <div
              style={{ color: "red", marginLeft: "32px", marginTop: "16pxx" }}
            >
              <span> {username === "" ? userErr : ""}</span>
            </div>
            <p className="login-label">Enter your E-mail</p>
            <TextField
              style={{ width: "100%" }}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="filled-required"
              label="Email"
              variant="outlined"
            />
            <div
              style={{ color: "red", marginLeft: "32px", marginTop: "16pxx" }}
            >
              <span> {email === "" ? emailErr : ""}</span>
            </div>

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
            <div
              style={{ color: "red", marginLeft: "32px", marginTop: "16pxx" }}
            >
              <span> {pass === "" ? passErr : ""}</span>
            </div>
          </div>

          <div className="login-button">
            <Button
              style={{ width: "100%" }}
              variant="contained"
              onClick={Sign_up}
            >
              Sign Up{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
