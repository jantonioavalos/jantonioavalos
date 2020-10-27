import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        time
        slug
        title
        description
        type
      }
    }
  }
`;
const AboutPage = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark;
  return (
    <Layout className="page">
      <SEO title={frontmatter.title} description={excerpt} />

      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <p className="article-metadata">{frontmatter.type}</p>
            <h1>{frontmatter.title}</h1>
          </section>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      {/* <div className="wrapper">
        <h4>{frontmatter.kicker}</h4>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.subtitle}</h3>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div> */}
    </Layout>
  );
};

export default AboutPage;
