import React from "react";
import { Link } from "gatsby";

import {
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterSquare,
  AiOutlineGithub,
  AiTwotoneMail,
} from "react-icons/ai";

import logotipo from "../../static/assets/logo-80-darkmode.svg";

const Footer = () => (
  <div>
    <footer className="site-footer">
      <div className="container">
        <Link to="/" className="logo-footer">
          <img src={logotipo} alt="Logo" />
          <small>Copyright © 2020 All rights reserved</small>
        </Link>
        <p className="contact-footer">
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
         
      </div>
    </footer>
  </div>
);

export default Footer;
