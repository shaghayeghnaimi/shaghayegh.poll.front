import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import backgroundTitel from "./main.jpg";
import firstProduct from "./first.jpg";
import secondProduct from "./second.jpg";
import thirdProduct from "./third.jpg";

const styles = {
  header: {
    backgroundImage: `url(${backgroundTitel})`,
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    textAlign: "center",
    border: "2px solid black",
  },

  content: {
    margin: "3opx",
    backgroundColor: "#ffffff",
    opacity: "0.6",
    marginLeft: "20px",
    marginRight: "20px",
  },
  title: {
    margin: "5%",
    fontSize: "80px",
    color: "#000000",
  },
};
export default function App() {
  return (
    <Router>
      <div style={styles.header}>
        <div style={styles.content}>
          <h1 style={styles.title}>Textile</h1>
        </div>
      </div>
      <div>
        <div>
          <Link to="/Product1">
            <img src={firstProduct} alt="first Product" />
          </Link>
          <h2>Soimoi Rose Floral Printed</h2>
          <p>
            It is always a good idea to empower the world with your abilities
            and let everybody or everyone use their creativity for the best
            outcome. That does, as we create unique designs with digitally
            printed fabrics which can help you to create a product we could not
            have imagined and that's the power of individual thinking by Super
            minds.
          </p>
        </div>
        <div>
          <Link to="/Product2">
            <img src={secondProduct} alt="second Product" />
          </Link>
          <h2>Soimoi White Cotton Voile</h2>
          <p>
            That's what exactly Soimoi does, as we create unique designs with
            digitally printed fabrics which can help you to create a product we
            could not have imagined and that's the power of individual thinking
            by Super minds.
          </p>
        </div>
        <div>
          <Link to="/Product3">
            <img src={thirdProduct} alt="third Product" />
          </Link>
          <h2>Soimoi White Cotton Cambric</h2>
          <p>
            It is always a good idea to empower the world with your abilities
            and let everybody or everyone use their creativity for the best
            outcome. That's what exactly Soimoi does, as we create unique
            designs with digitally printed fabrics.
          </p>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product1" element={<Product1 />} />
          <Route path="/Product2" element={<Product2 />} />
          <Route path="/Product3" element={<Product3 />} />
        </Routes>
      </div>
    </Router>
  );
}
