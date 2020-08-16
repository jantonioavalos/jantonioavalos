import React from "react";
import {
  RiLinkedinBoxLine,
  RiMediumLine,
  RiTwitterLine,
  RiGithubLine,
  RiMailLine,
} from "react-icons/ri";

const Footer = () => (
  <div>
    <footer className="site-footer">
      <div className="container">
        <p>
          <a href="mailto:hey@jantonioavalos.com" target="_blank">
            <RiMailLine />
          </a>{" "}
          <a href="https://linkedin.com/in/jantonioavalos" target="_blank">
            <RiLinkedinBoxLine />
          </a>{" "}
          <a href="https://medium.com/@jantonioavalos" target="_blank">
            <RiMediumLine />
          </a>{" "}
          <a href="https://github.com/jantonioavalos" target="_blank">
            <RiGithubLine />
          </a>{" "}
          <a href="https://twitter.com/jantonioavalos" target="_blank">
            <RiTwitterLine />
          </a>
        </p>
      </div>
    </footer>
  </div>
);

export default Footer;
