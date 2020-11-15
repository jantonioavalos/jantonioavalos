import React from "react";
import {
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterSquare,
  AiOutlineGithub,
  AiTwotoneMail,
} from "react-icons/ai";

const Footer = () => (
  <div>
    <footer className="site-footer">
      <div className="container">
        <p>
          <a href="mailto:hey@jantonioavalos.com" target="_blank">
            <AiTwotoneMail />
          </a>{" "}
          <a href="https://linkedin.com/in/jantonioavalos" target="_blank">
            <AiFillLinkedin />
          </a>{" "}
          <a href="https://medium.com/@jantonioavalos" target="_blank">
            <AiFillMediumSquare />
          </a>{" "}
          <a href="https://github.com/jantonioavalos" target="_blank">
            <AiOutlineGithub />
          </a>{" "}
          <a href="https://twitter.com/jantonioavalos" target="_blank">
            <AiFillTwitterSquare />
          </a>
        </p>
        <small className="small">Copyright © 2020 All rights reserved</small>
      </div>
    </footer>
  </div>
);

export default Footer;
