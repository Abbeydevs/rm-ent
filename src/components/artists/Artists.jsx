import React from "react";
import { Link } from "react-router-dom";
import artist1 from "../../images/artist1.png"
import artist2 from "../../images/artist2.png"
import artist3 from "../../images/artist3.png"

import "./Artists.css";

export default function Artists() {
  return (
    <section className="container artist-container">
      <div className="top-container">
        <h1>Artists</h1>
        <Link to="/artists"><button className="btn secondary-btn">Book Artist</button></Link>
      </div>
      <div className="image-grid">
        <img src={artist1} alt="Artists" />
        <img src={artist2} alt="Artists" />
        <img src={artist3} alt="Artists" />
      </div>
    </section>
  );
}
