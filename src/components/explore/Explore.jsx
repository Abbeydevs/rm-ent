import React from "react";
import exploreImg1 from "../../images/e-img1.png";
import exploreImg2 from "../../images/e-img2.png";
import exploreImg3 from "../../images/e-img3.png";

import "./Explore.css";

export default function Explore() {
  return (
    <section className="container explore-container">
      <div className="top-wrapper">
        <h4>Explore our Songs</h4>
      </div>
      <div className="explore-wrapper">
        <div className="flex-column">
          <img src={exploreImg1} alt="explore" />
          <p>
            <span>Dbanj</span> - Scapegoat
          </p>
        </div>
        <div className="flex-column">
          <img src={exploreImg2} alt="explore" />
          <p>
            <span>Farida</span> - Marry me
          </p>
        </div>
        <div className="flex-column">
          <img src={exploreImg3} alt="explore" />
          <p>
            <span>The Boys Band</span> - Overcome
          </p>
        </div>
      </div>
    </section>
  );
}
