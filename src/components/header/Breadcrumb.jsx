import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={name}>
            <span className="breadcrumb-separator">›</span>
            {isLast ? (
              <span className="breadcrumb-current">{decodeURIComponent(name)}</span>
            ) : (
              <Link to={routeTo}>{decodeURIComponent(name)}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
