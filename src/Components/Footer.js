import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <a className="" href="https://github.com/Bhaskar-maity">
          <GitHubIcon className="github__logo" />
        </a>
        <h3>Made By Bhaskar Maity | 2020</h3>
        <p>
          <strong>Made With React</strong>
        </p>
        <br/>
        <p>
          I do not own WhatsApp brand & logo, this is for learnig purpose.
        </p>
      </div>
    </div>
  );
}

export default Footer;
