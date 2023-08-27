import React from 'react'

import "./Hero.css"

export default function Hero() {
  return (
    <section className="container hero-container">
      <div className="hero-contents">
        <p>Real Matter Ent.</p>
        <h1>Where Music Matters.</h1>
        <div className="hero-btns">
          <button className="btn primary-btn">View all Artists</button>
          <button className="btn outline-btn">Explore Music</button>
        </div>
      </div>
    </section>
  )
}
