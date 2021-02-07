import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { RiExternalLinkLine } from "react-icons/ri";

const FullCard = ({ data }) => {
  const content = 
    <article className="post-card">
      {data.frontmatter.featuredImage ?
        <Img
          fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
        /> 
      : null}
      <div className="post-content">
        <h2 className="post-title">
          {data.frontmatter.title.substring(0, 68) + "... "}       
          {data.frontmatter.extlink ? (
            <small>
              <RiExternalLinkLine />
            </small>
          ) : null}     
        </h2>
        <p className="post-description">{data.frontmatter.description}</p>
        <p className="post-meta">
          <span>
            {data.frontmatter.type + " ∙ " + data.frontmatter.time + " read"}
          </span>
          {data.frontmatter.type === "Blog" ? <time>{" ∙ " + data.frontmatter.date}</time> : null}
        </p>
      </div>
    </article>;
    
  return(
    data.frontmatter.extlink ?
      <a href={data.frontmatter.extlink} target="_blank">
        {content}
      </a> :
      <Link to={data.frontmatter.slug}>
        {content}
      </Link>
  );
}

export default FullCard;
