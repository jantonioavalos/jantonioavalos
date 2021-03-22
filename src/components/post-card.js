import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { RiExternalLinkLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";


const PostCard = ({ data }) => {
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
          {data.frontmatter.title.length > 67
              ? data.frontmatter.title.substring(0, 62) + "... "
              : data.frontmatter.title + " "}       
          {data.frontmatter.extlink ? (
            <small>
              <RiExternalLinkLine />
            </small>
          ) : null}     
        </h2>
        <p className="post-meta">  
          {data.frontmatter.type + " ∙ "} 
          {data.frontmatter.type === "Blog" ? <time>{data.frontmatter.date + " ∙ "}</time> : null}
          <small><FiCoffee /></small>
          {data.frontmatter.type === "Case Study" ? " " + data.timeToRead + " min read" : " " + data.frontmatter.time + " read"}
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

export default PostCard;
