import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeColor, setActiveColor] = useState(0);
  const menu = [
    { name: "home", link: "/" },
    { name: "product", link: "/product" },
    { name: "contact", link: "/contact" },
    { name: "profile", link: "/profile" },
  ];

  const handleActive = (index: number) => {
    setActiveColor(index);
  };
  return (
    <div className={classes.Col1}>
      <div className={classes.Col2}>
        {menu.map((item, index) => (
          <div className={classes.Col3} key={index}>
            <Link
              to={item.link}
              onClick={() => handleActive(index)}
              className={`${classes.link}${
                activeColor === index ? classes.active : ""
              }`}
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
