import React from "react";
import CTA from "./CTA";
import Socials from "./Socials";
import "./Header.css";

const Header = () => {
  return (
    <header id="Home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mohamed Aliani</h1>
        <h5 className="text-light">
          I am a passionate computer science student currently in my Final year
          at AIAC, with a strong interest in developing web and software
          applications.{" "}
        </h5>
        <h5 className="text-light">
          Get to know me by exploring my portfolio{" "}
        </h5>
        <CTA />
        <Socials />
      </div>
    </header>
  );
};

export default Header;
