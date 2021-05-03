import React from "react";
import {Link} from "react-router-dom";
import {ApiRoute} from "../../enum";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="page-footer">
      <div className="logo">
        <Link to={ApiRoute.ROOT} className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <div className="copyright">
        <p>© {year.getFullYear()} What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
