import React from "react";
import { Link } from "gatsby";
import { RiMenu3Line, RiCloseLine, RiDownloadCloud2Line } from "react-icons/ri";

const CV =
  "https://drive.google.com/file/d/1CPehX45eQxdiQg28fJBPCiWE1ZKAdboo/view?usp=sharing";

const MenuItems = [
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/resources",
    title: "Resources",
  },

  // {
  //   path: "/blogfolio",
  //   title: "Blogfolio",
  // },
];

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showMenu: !state.showMenu,
    }));
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ));
    return (
      <nav className="site-navigation">
        {/* <button
          onClick={this.handleToggleClick}
          className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}
        >
          <div className="icon-menu-line">
            <RiMenu3Line />
          </div>
          <div className="icon-menu-close">
            <RiCloseLine />
          </div>
        </button> */}
        <ul>{listMenuItems}</ul>
        {/* <Link to={CV} target="_blank" className="button -banner">
          <RiDownloadCloud2Line className="label" />
          Resume
        </Link> */}
      </nav>
    );
  }
}

export default Navigation;
