import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { AiFillLinkedin, AiFillTwitterSquare, AiOutlineGithub, AiFillMediumSquare } from "react-icons/ai"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query LinksQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
		title
		resources {
			topic
			links {
				name
				link
			}
			
		}
      }
    }
  }
`
const LinksPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const resources = frontmatter.resources.map((i) =>
  	<div>
	  <h3><strong>{i.topic}</strong></h3>
		{i.links.map((j) => 
			<p><a href={j.link} target="_blank">{j.name}</a></p>
			)
	  	}
	</div>
    );

	return (
		<Layout className="page">
			<SEO
				title={frontmatter.title + " | jantonioavalos"}
				description={excerpt}
			/>
			<div className="wrapper">
				<section className="article-header bottomless">
          <h1 className="bottomless">{frontmatter.title}</h1>
        </section>
				<article className="blog-post">
					<div className="blog-post-content">
						{resources}
					</div>
				</article>
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	)
}

export default LinksPage