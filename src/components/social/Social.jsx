import React from "react";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { RiSoundcloudLine } from "react-icons/ri";
import {} from "react-icons";

import "./Social.css";

export default function Social() {
  return (
    <section className="container s-container">
      <h1>Follow us</h1>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><BiLogoFacebook size={50}/></a>
        <a href="https://soundcloud.com" target="_blank" rel="noreferrer"><RiSoundcloudLine size={50} /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><BiLogoTwitter size={50} /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><BiLogoInstagram size={50} /></a>
      </div>
    </section>
  );
}
