import { Url } from "core/Url";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  content: string | JSX.Element;
  to: Url;
}

const NavbarLink: React.FC<Props> = ({ content, to }) => (
  <Link className="navbar-item" to={to}>
    {content}
  </Link>
);

export default NavbarLink;
