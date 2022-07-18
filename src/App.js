import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Home from "./Home";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import "./App.css";

export default function App() {
  return (
    <Router >
      <div className="main">
        <div className="header">
          <div className="content">
            <Link to="/" className="title">
              Textile
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product1" element={<Product1 />} />
        <Route path="/Product2" element={<Product2 />} />
        <Route path="/Product3" element={<Product3 />} />
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
