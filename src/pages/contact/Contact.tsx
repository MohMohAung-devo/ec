import React, { useState } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitHandle = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setEmail(email);
    setName(name);
    setPhone(phone);
    setMessage(message);
    console.log(email, phone, name, message);
  };

  return (
    <div className={classes.contactCol1}>
      <div className={classes.contactCol2}>
        <h1>Contact Form</h1>
        <form className={classes.contactCol3} onSubmit={submitHandle}>
          <div className={classes.contactCol4}>
            <input
              placeholder="Email...."
              className={classes.contactInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Name..."
              className={classes.contactInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Phone...."
              className={classes.contactInput}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              placeholder="Message......"
              className={classes.contactText}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className={classes.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
