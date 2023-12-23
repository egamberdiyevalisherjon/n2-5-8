import { Component } from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const links = [
  { link: "/", iconName: "house", text: "Home" },
  { link: "/about", iconName: "info", text: "About" },
  { link: "/blog", iconName: "note-sticky", text: "Blog" },
  { link: "/products", iconName: "list", text: "Products" },
  { link: "/contact", iconName: "phone", text: "Contact" },
  { link: "/login", iconName: "right-to-bracket", text: "Login" },
  { iconName: "chevron-left", text: "Logout" },
];

class Header extends Component {
  render() {
    return (
      <header
        className="border-bottom py-2 px-5 shadow sticky-top d-flex justify-content-between align-items-center"
        id="main-header"
      >
        <Link className="text-primary text-decoration-none display-5" to="/">
          NT
        </Link>
        <nav>
          <ul className="list-unstyled d-flex gap-3 m-0">
            {links
              .filter((l) => l.link)
              .map((l, index) => (
                <NavLink
                  key={index}
                  link={l.link}
                  iconName={l.iconName}
                  text={l.text}
                />
              ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
