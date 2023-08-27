import React from "react";
import { Link } from "react-router-dom";

import "./Events.css";

export default function Events() {
  return (
    <section className="container event-container">
      <div className="event-wrapper">
        <h1>Our Events</h1>
        <p>Do you want to attend our events? Book now</p>
        <Link to="/events">
          <button className="btn primary-btn">Book now</button>
        </Link>
      </div>
    </section>
  );
}
