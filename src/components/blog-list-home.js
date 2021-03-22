import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { RiArrowRightSLine } from "react-icons/ri";

import PostCard from "./post-card";

const PostMaker = ({ data }, type) => (
  <div className="grids col-1 sm-2 lg-3">{data}</div>
);

export default function BlogListHome() {
  return (
    <StaticQuery
      query={graphql`
        query {
          portfolioRemark: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { in: ["portfolio-post"] }, private: { eq: false } } }
            limit: 9
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                timeToRead
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  time
                  slug
                  title
                  type
                  private
                  extlink
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 540, maxHeight: 360, quality: 100) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
          blogRemark: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { in: ["blog-post"] }, private: { eq: false } } }
            limit: 3
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  time
                  slug
                  title
                  type
                  private
                  extlink
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const caseStudies = data.portfolioRemark.edges
          .filter((edge) => !!edge.node.frontmatter.date)
          .map((edge) =>
            edge.node.frontmatter.type == "Case Study" ? (
              <PostCard key={edge.node.id} data={edge.node} />
            ) : null
          );
        const posts = data.portfolioRemark.edges
          .filter((edge) => !!edge.node.frontmatter.date)
          .map((edge) =>
            edge.node.frontmatter.type == "Medium" ? (
              <PostCard key={edge.node.id} data={edge.node} />
            ) : null
          );
          const zensemakers = data.blogRemark.edges
          .filter((edge) => !!edge.node.frontmatter.date)
          .map((edge) => 
            <PostCard key={edge.node.id} data={edge.node} />
          );
        return (
          <div>
            <section className="home-posts">
              <h2 className="category">Case studies</h2>
              <PostMaker data={caseStudies} />
              <h2 className="category">Featured articles</h2>
              <PostMaker data={posts} />
              <h2 className="category">Latest posts</h2>
              <PostMaker data={zensemakers} />
              <Link className="button" to="/blog"> 
                Check all <span className="icon -right"><RiArrowRightSLine /></span>
              </Link>
            </section>
          </div>
        );
      }}
    />
  );
}
