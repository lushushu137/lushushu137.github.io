import { Typography, Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const toBase = React.forwardRef((props, ref) => (
  <NavLink ref={ref} exact to="/" {...props} />
));
const toResume = React.forwardRef((props, ref) => (
  <NavLink ref={ref} to="/resume" {...props} />
));
const toAbout = React.forwardRef((props, ref) => (
  <NavLink ref={ref} to="/about" {...props} />
));

const NavLinks = () => {
  return (
    <div className="nav-links">
      <Link variant="body2" component={toBase} color="inherit">
        Projects
      </Link>
      <Link variant="body2" component={toResume} color="inherit">
        Resume
      </Link>
      <Link variant="body2" component={toAbout} color="inherit">
        About
      </Link>
    </div>
  );
};

export default NavLinks;
