import React, { useState } from "react";
import classes from "./Cart.module.css";
import Photo from "../../../assets/Photo.jpg";

const Cart = () => {
  const [cartList, setCartList] = useState([
    { id: 1, name: "Women Clothes", photo: Photo, price: 1000, count: 1 },
    { id: 2, name: "Man Clothes", photo: Photo, price: 1000, count: 1 },
    { id: 3, name: "Girl Clothes", photo: Photo, price: 1000, count: 1 },
    { id: 4, name: "Girl Clothes", photo: Photo, price: 1000, count: 1 },
  ]);
  const handleCount = (id: number) =>
    setCartList((prv) =>
      prv.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );

  const handleReduce = (id: number) => {
    setCartList((prv) =>
      prv.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <div className={classes.cartCol1}>
      <div className={classes.cartCol2}>
        <h1 className={classes.title}>Selected Product List</h1>
        <div className={classes.cartCol3}>
          {cartList.map((item) => (
            <div className={classes.cartCol4}>
              <img src={item.photo} alt="" className={classes.img} />
              <div className={classes.list}>
                {" "}
                <p>{item.name}</p>
                <p>Price - {item.price}</p>
                <p>Count - {item.count} </p>
                <div className={classes.buttonList}>
                  <button
                    className={classes.button}
                    onClick={() => handleReduce(item.id)}
                  >
                    -
                  </button>
                  <button
                    className={classes.button}
                    onClick={() => handleCount(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
