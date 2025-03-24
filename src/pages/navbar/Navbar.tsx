import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeColor, setActiveColor] = useState("");
  const location = useLocation();
  const menu = [
    { name: "home", link: "/" },
    { name: "product", link: "/product" },
    { name: "contact", link: "/contact" },
    { name: "profile", link: "/profile" },
  ];

  const handleActive = (link: string) => {
    setActiveColor(link);
  };
  return (
    <div className={classes.Col1}>
      <div className={classes.Col2}>
        {menu.map((item, index) => (
          <div className={classes.Col3} key={index}>
            <Link
              to={item.link}
              onClick={() => handleActive(item.link)}
              className={`${classes.link}${
                location.pathname === item.link ? classes.active : ""
              }`}
              style={{
                borderColor: activeColor === item.link ? "#c0b283" : "",
              }}
            >
              <p className={classes.textColor}>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
