import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import "typeface-yeseva-one";
import "./Home.css";
import main from "./Main.svg";
import firstImage from "./first.svg";
import secondImage from "./second.svg";
import thirdImage from "./third.svg";

export default function Home() {
  return (
    <div className="home-body">
      <div className="home-container">
        <div className="home-main">
          <p className="home-major" style={{ fontFamily: "yeseva one" }}>
            Make poll,
          </p>
          <p className="home-major" style={{ fontFamily: "yeseva one" }}>
            Just by <u>3</u> steps!
          </p>
          <p className="home-minor">Do it easy and fast</p>
          <div className="home-button">
            <Link
              style={{ textDecoration: "none", fontFamily: "roboto" }}
              to="/Login"
            >
              <Button
                variant="contained"
                endIcon={<ArrowCircleRightOutlinedIcon />}
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
        <div className="home-main1">
          <img src={main} className="home-main_image" alt="123" />
        </div>
      </div>
      <div className="featuers">
        <div className="feature1-3">
          <div className="feature-content">
            <h3 className="home-h3"> 1. Creat poll</h3>
            <p className="feature-paragraph">
              Type your question then add answers. Hit 'Create Poll', and then
              your poll is ready to use.
            </p>
          </div>
          <div className="home-picture">
            <img src={firstImage} alt="first" className="feature-img" />
          </div>
        </div>
        <div className="feature2">
          <div className="home-picture">
            <img src={secondImage} alt="second" className="feature-img" />
          </div>
          <div className="feature-content">
            <h3 className="home-h3"> 2. Share the link</h3>
            <p className="feature-paragraph">
              Click Share and copy your poll url. You can also hit Embed to
              place the poll on your website or blog.
            </p>
          </div>
        </div>
        <div className="feature1-3">
          <div className="feature-content">
            <h3 className="home-h3"> 3. Get results</h3>
            <p className="feature-paragraph">
              Set start and end dates, view IP and voter information or fix the
              typo you missed.
            </p>
          </div>
          <div className="home-picture">
            <img src={thirdImage} alt="third" className="feature-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
