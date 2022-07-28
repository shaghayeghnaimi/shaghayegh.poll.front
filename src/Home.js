import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import "typeface-yeseva-one";
import "./Home.css";
import main from "./Main.svg";
import firstImage from "./first.svg"
import secondImage from "./second.svg"
import thirdImage from "./third.svg"

export default function Home() {
  return (
    <div className="body">
      <div className="container">
        <div className="main">
          <p className="explain" style={{ fontFamily: "yeseva one" }}>
            Make poll,
          </p>
          <p className="explain" style={{ fontFamily: "yeseva one" }}>
            Just by <u>3 </u>steps!
          </p>
          <p className="explain1">Do it easy and fast</p>
          <Link
            style={{ textDecoration: "none", fontFamily: "roboto" }}
            to="/Login"
          >
            <Button
              sx={{ mb: 10, ml: "32px" }}
              variant="contained"
              className="button"
              endIcon={<ArrowCircleRightOutlinedIcon />}
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
        <div className="main1">
          <img src={main} className="main_image" alt="123" />
        </div>
      </div>
      <div className="featuers">
        <div className="feature1-3">
          <div className="content">
            <h3> 1. Creat poll</h3>
            <p>
              Type your question then add answers. Hit 'Create Poll', and then
              your poll is ready to use.
            </p>
          </div>
          <div className="picture">
            <img
              src={firstImage}
              alt="first"
            />
          </div>
        </div>
        <div className="feature2">
          <div className="content">
            <h3> 2. Share the link</h3>
            <p>
              Click Share and copy your poll url. You can also hit Embed to
              place the poll on your website or blog.
             
            </p>
          </div>
          <div className="picture">
          <img
              src={secondImage}
              alt="second"
            />
          </div>
        </div>
        <div className="feature1-3">
          <div className="content">
            <h3> 3. Get results</h3>
            <p>
              Set start and end dates, view IP and voter information or fix the
              typo you missed.
              
            </p>
          </div>
          <div className="picture">
          <img
              src={thirdImage}
              alt="third"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
