import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { RiExternalLinkLine } from "react-icons/ri";

const PostCard = ({ data }) => (
  <article className="post-card">
    {data.frontmatter.featuredImage ? (
      data.frontmatter.extlink ? (
        <a href={data.frontmatter.extlink} target="_blank">
          <Img
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + " - Featured image"}
            className="featured-image"
          />
        </a>
      ) : (
        <Link to={data.frontmatter.slug}>
          <Img
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + " - Featured image"}
            className="featured-image"
          />
        </Link>
      )
    ) : (
      ""
    )}
    <div class="post-content">
      <h2 className="title">
        {data.frontmatter.extlink ? (
          <a href={data.frontmatter.extlink} target="_blank">
            {data.frontmatter.title.length > 65
              ? data.frontmatter.title.substring(0, 57) + "... "
              : data.frontmatter.title + " "}
            <small>
              <RiExternalLinkLine />
            </small>
          </a>
        ) : (
          <Link to={data.frontmatter.slug}>
            {data.frontmatter.title.length > 65
              ? data.frontmatter.title.substring(0, 57) + "... "
              : data.frontmatter.title + " "}
          </Link>
        )}
      </h2>
      <p className="meta">
        <span>
          {data.frontmatter.type + " ∙ " + data.frontmatter.time + " read"}
        </span>
        {/* <time>{data.frontmatter.date}</time> */}
      </p>
    </div>
  </article>
);

export default PostCard;
