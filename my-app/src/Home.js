import React from "react";
import {Link } from "react-router-dom";
import firstProduct from "./first.jpg";
import secondProduct from "./second.jpg";
import thirdProduct from "./third.jpg";

import Rating from "@mui/material/Rating";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <Link to="/Product1">
            <img src={firstProduct} alt="first Product" />
          </Link>
          <h2>Soimoi Rose Floral Printed</h2>

          <Rating
            name="half-rating-read"
            defaultValue={5}
            precision={0.5}
            readOnly
          />
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
          <Rating
            name="half-rating-read"
            defaultValue={3.5}
            precision={0.5}
            readOnly
          />
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
          <Rating
            name="half-rating-read"
            defaultValue={1.5}
            precision={0.5}
            readOnly
          />
          <p>
            It is always a good idea to empower the world with your abilities
            and let everybody or everyone use their creativity for the best
            outcome. That's what exactly Soimoi does, as we create unique
            designs with digitally printed fabrics.
          </p>
        </div>
      </div>
    </div>
  );
}
