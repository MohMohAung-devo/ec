import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = [
    { name: "home", link: "/" },
    { name: "product", link: "/product" },
    { name: "contact", link: "/contact" },
    { name: "profile", link: "/profile" },
  ];

  return (
    <div className={classes.Col1}>
      <div className={classes.Col2}>
        {menu.map((item) => (
          <div className={classes.Col3}>
            <Link to={item.link} className={classes.link}>
              <p className={classes.textColor}>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
