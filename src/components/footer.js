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
  <footer>
    <div className="container">
      <div className="footer-layout">
          <div className="logo-footer">
            <Link to="/" >
              <img src={logotipo} alt="Logo" />
            </Link>
            <small className="legal-footer">Copyright © 2020 All rights reserved</small>
          </div>
          <div className="contact-footer">
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
          </div>
      </div>
    </div>
  </footer>
);

export default Footer;
