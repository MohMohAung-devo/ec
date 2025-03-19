import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const menu = [
    { name: "home", link: "/" },
    // { name: "product", link: "/product" },
    { name: "profile", link: "/profile" },
  ];

  return (
    <div className={classes.Col1}>
      <div className={classes.Col2}>
        {menu.map((item) => (
          <div className={classes.Col3}>
            <p className={classes.textColor}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
