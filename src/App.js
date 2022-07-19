import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TableFooter from '@mui/material/TableFooter';
import Button from "@mui/material/Button";
import Home from "./Home";
import PollList from "./PollList";
import PollPage from "./PollPage";

import "./App.css";
import main from "./main.png";

export default function App() {
  return (
    <Router>
      <div className="header">
        <div className="logo">
          <img className="main_image" src={main} alt="logo" />
          <Link to="/" className="title">
            Easy Poll
          </Link>
        </div>
        <div className="content">
          <Link to="/PollList" className="content-name">
            Manage Polls
          </Link>
          <Link to="/PollPage" className="content-name">
            Results
          </Link>
          <Link to="/PollList" className="content-name">
            Poll List
          </Link>
        </div>
        <div className="button-login">
          <Button variant="contained">Log in</Button>
        </div>
        <div className="button-create">
        <Button variant="outlined">Create +</Button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PollList" element={<PollList />} />
        <Route path="/PollPage" element={<PollPage />} />
      </Routes>
      <TableFooter></TableFooter>
      
     
    </Router>
  );
}
