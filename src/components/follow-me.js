import React from "react"
import {
  RiLinkedinBoxLine,
  RiMediumLine,
  RiTwitterLine,
  RiGithubLine,
  RiMailLine,
} from "react-icons/ri"

const FollowMe = () => (
  <div>
    <h2>Get in touch</h2>
    <section>
      <h3>
        <a href="https://linkedin.com/in/jantonioavalos" target="_blank">
          <RiLinkedinBoxLine />
        </a>{" "}
        <a href="https://medium.com/@jantonioavalos" target="_blank">
          <RiMediumLine />
        </a>{" "}
        <a href="https://twitter.com/jantonioavalos" target="_blank">
          <RiTwitterLine />
        </a>{" "}
        <a href="https://github.com/jantonioavalos" target="_blank">
          <RiGithubLine />
        </a>{" "}
        <a href="mailto:hey@jantonioavalos.com" target="_blank">
          <RiMailLine />
        </a>{" "}
      </h3>
    </section>
  </div>
)

export default FollowMe
