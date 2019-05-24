import { NavbarMenuItem } from "Common/types";
import React from "react";
import NavbarLink from "../NavbarLink";

interface Props {
  items: NavbarMenuItem[];
  title: string;
}

const NavbarDropdown: React.FC<Props> = ({ items, title }) => (
  <div className="navbar-item has-dropdown is-hoverable">
    <div className="navbar-link">{title}</div>
    <div className="navbar-dropdown">
      {items.map(item => (
        <NavbarLink key={"dropdown-link-" + item[0]} to={item[0]} content={item[1]} />
      ))}
    </div>
  </div>
);

export default NavbarDropdown;
