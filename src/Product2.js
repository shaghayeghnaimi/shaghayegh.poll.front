import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Product from "./second.jpg";
import "./Product.css";

export default function Product1() {
  const [size, setSize] = React.useState("");
  const [color, setColor] = React.useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
    setColor(event.target.value);
  };

  return (
    <div className="container">
      <div className="image">
        <img className="main-image" src={Product} alt="Product" />
      </div>
      <div className="info">
        <h2>Soimoi White Cotton Voile</h2>
        <div style={{ textAlign: "center" }}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120, marginTop: "24px" }}
          >
            <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={size}
              onChange={handleChange}
              label="size"
            >
              <MenuItem value={1}>1 meter</MenuItem>
              <MenuItem value={2}>2 meter</MenuItem>
              <MenuItem value={3}>3 meter</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120, marginTop: "24px" }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Color
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={color}
              onChange={handleChange}
              label="color"
            >
              <MenuItem value={1}>blue</MenuItem>
              <MenuItem value={2}>green</MenuItem>
              <MenuItem value={3}>red</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "8px",
            margin: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                textAlign: "left",
                marginLeft: "8px",
                fontWeight: "bold",
              }}
            >
              15.99$
            </p>

            <p>
              <del>18.99$</del>
            </p>
            <p
              style={{
                backgroundColor: "red",
                marginRight: "8px",
                padding: "8px",
                backgroundClip: "padding-box",
                fontSize: "10px",
                fontWeight: "bold",
                borderRadius: "30px",
              }}
            >
              10%
            </p>
          </div>
          <Button className="button"
           
            variant="contained"
          >
            Add to Card
          </Button>
        </div>
      </div>
    </div>
  );
}
