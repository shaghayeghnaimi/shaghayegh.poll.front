import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
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

        
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PollList" element={<PollList />} />
        <Route path="/PollPage" element={<PollPage />} />
       
      </Routes>

      <div className="footer">
        <div className="icon-connection">
          <InstagramIcon
            sx={{ color: "purple", marginRight: "16px", marginTop: "24px" }}
          />
          <TelegramIcon sx={{ color: "blue", marginRight: "16px" }} />
          <WhatsAppIcon sx={{ color: "green", marginRight: "16px" }} />
          <YouTubeIcon sx={{ color: "red", marginRight: "16px" }} />
        </div>
        <div className="information">
          <div className="us">
            <p>َAbout us</p>
            <p>Contact Us</p>
          </div>
          <div className="address">
            <b>Address:</b>
            <span>
              101 Independence Avenue, S.E. Washington, D.C. 20559-6000
            </span>
            <br></br>
            <b>Telephone:</b>
            <span>(1 202) 707 3000</span>
          </div>
        </div>
      </div>
    </Router>
  );
}
