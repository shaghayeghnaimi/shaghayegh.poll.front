import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import backgroundTitel from "./main.jpg";


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
    margin: "40px",
    backgroundColor: "#ffffff",
    opacity: "0.6",
    marginLeft: "20px",
    marginRight: "20px",
  },
  title: {
    margin: "15%",
    fontSize: "80px",
    color: "#000000",
    textDecoration: "none"
  },
};
export default function App() {
  return (
    <Router>
      <div style={styles.header}>
        <div style={styles.content}>
          <Link to="/" style={styles.title}>Textile</Link>
        </div>
      </div>
    
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product1" element={<Product1 />} />
          <Route path="/Product2" element={<Product2 />} />
          <Route path="/Product3" element={<Product3 />} />
        </Routes>
     
    </Router>
  );
}
