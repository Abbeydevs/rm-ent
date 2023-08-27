import React from 'react'

import "./Shop.css"

export default function Shop() {
  return (
    <section className="shop-container">
        <div className="l-contents">
            <p>All Merchandise & Digital Music</p>
            <h1>40% off For a Limited time</h1>
            <button className='btn outline-btn'>Shop now</button>
        </div>
        <div className="r-shop-btn">
            <button className='btn outline-btn'>Shop now</button>
        </div>
    </section>
  )
}
