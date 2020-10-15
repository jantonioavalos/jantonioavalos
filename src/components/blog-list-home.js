import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { RiArrowRightSLine } from "react-icons/ri";

import PostCard from "./post-card";

const PostMaker = ({ data }, type) => (
  <div className="grids col-1 sm-2 lg-3">{data}</div>
);

// const PostMaker = ({ data }, type) => (
//   <section className="home-posts">
//     <h2>Latest publications</h2>
//     <div className="grids col-1 sm-2 lg-3">{data}</div>
//     <Link className="button" to="/blogfolio">
//       See more
//       <span class="icon -right">
//         <RiArrowRightSLine />
//       </span>
//     </Link>
//   </section>
// );

export default function BlogListHome() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { eq: "blog-post" } } }
            limit: 6
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
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const allPublications = data.allMarkdownRemark.edges
          .filter((edge) => !!edge.node.frontmatter.date)
          .map((edge) =>
            edge.node.frontmatter.private ? null : (
              <PostCard key={edge.node.id} data={edge.node} />
            )
          );
        const caseStudies = data.allMarkdownRemark.edges
          .filter((edge) => !!edge.node.frontmatter.date)
          .map((edge) =>
            edge.node.frontmatter.private ||
            edge.node.frontmatter.type == "Blog" ? null : (
              <PostCard key={edge.node.id} data={edge.node} />
            )
          );
        const posts = data.allMarkdownRemark.edges
          .filter((edge) => !!edge.node.frontmatter.date)
          .map((edge) =>
            edge.node.frontmatter.private ||
            edge.node.frontmatter.type == "Case Study" ? null : (
              <PostCard key={edge.node.id} data={edge.node} />
            )
          );
        return (
          <div>
            {/* <section className="home-posts">
              <h2>Latest publications</h2>
              <PostMaker data={allPublications} />
            </section> */}
            <section className="home-posts">
              <h2>Case studies</h2>
              <PostMaker data={caseStudies} />
              <h2>Latest articles</h2>
              <PostMaker data={posts} />
            </section>
          </div>
        );
      }}
    />
  );
}
