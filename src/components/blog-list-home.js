import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <h2>Latest posts</h2>
    <div className="grids col-1 sm-2 lg-3">{data}</div>
    {/* <Link className="button" to="/blogfolio">
      See more
      <span class="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link> */}
  </section>
)

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
                  slug
                  title
                  tags
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
      render={data => {
        const posts = data.allMarkdownRemark.edges
          .filter(edge => !!edge.node.frontmatter.date)
          .map(edge =>
            edge.node.frontmatter.private ? null : (
              <PostCard key={edge.node.id} data={edge.node} />
            )
          )
        return <PostMaker data={posts} />
      }}
    />
  )
}
