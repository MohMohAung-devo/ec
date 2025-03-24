import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.profileCol1}>
      <div className={classes.profileCol2}>
        <h1 className={classes.name}>MohMohAung</h1>
        <p className={classes.Email}>Email - mohmohaung737@gmail.com</p>
        <p className={classes.order}>Order Histry</p>
        <p className={classes.check}>Checkout</p>
        <p className={classes.save}>Save</p>
        <button className={classes.button}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
