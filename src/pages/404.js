import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiEyeOffLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiEyeOffLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Page unavailable</h1>
        {/* <p>
          Have you wondered into the unknown. Let me help you, Please take a
          look at below options
        </p> */}
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Back to Homepage
      </Link>
      <Link to="/contact" className="button -outline">
        Report this <RiBugLine className="icon -right" />
      </Link>
    </div>
  </Layout>
)

export default NotFound
