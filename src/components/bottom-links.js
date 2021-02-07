import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from "gatsby";

import { AiOutlineToTop, AiOutlineRollback } from "react-icons/ai";

const BottomLinks = () => (
  <div id="bottom-links">
    <Link to="/" className="button -outline"><AiOutlineRollback className="icon -left"/>Back Home</Link>
    <button onClick={() => scrollTo('#top')} className="button -outline"><AiOutlineToTop className="icon -left"/>Page Top</button>
  </div>
)

export default BottomLinks