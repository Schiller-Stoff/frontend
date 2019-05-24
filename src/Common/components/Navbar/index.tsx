/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormatMessage } from "Common/reactIntl";
import { NavbarMenuContent } from "Common/types";
import { Url } from "Common/Url";
import React, { useCallback, useState } from "react";
import NavbarDropdown from "../NavbarDropdown";
import NavbarLink from "../NavbarLink";
import { messages } from "./messages";
import { joinClasses } from "Common/utils/joinClasses";
import styles from "./styles.module.scss";

interface Props {
  logo: string;
  title?: string;
  content?: NavbarMenuContent;
}

const Navbar: React.FC<Props> = ({ logo, content = [], title }) => {
  const t = useFormatMessage();
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive, setIsActive]);
  return (
    <nav className="navbar is-primary is-spaced" role="navigation">
      <div className="navbar-brand">
        <NavbarLink
          to={Url.Home}
          content={
            <>
              <img src={logo} alt={t(messages.logoAlt)} />
              {title ? (
                <span className={joinClasses("has-text-weight-bold", styles.brand)}>{title}</span>
              ) : (
                undefined
              )}
            </>
          }
        />
        <a
          role="button"
          className={joinClasses("navbar-burger", isActive ? "is-active" : "")}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleIsActive}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className={"navbar-menu" + (isActive ? " is-active" : "")}>
        <div className="navbar-start">
          {content.map(item =>
            Array.isArray(item[1]) ? (
              <NavbarDropdown title={item[0]} items={item[1]} />
            ) : (
              <NavbarLink to={item[0] as Url} content={item[1]} />
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
