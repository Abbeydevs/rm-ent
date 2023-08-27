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
        <BiLogoFacebook size={50}/>
        <RiSoundcloudLine size={50} />
        <BiLogoTwitter size={50} />
        <BiLogoInstagram size={50} />
      </div>
    </section>
  );
}
