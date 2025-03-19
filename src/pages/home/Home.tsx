import React, { useState } from "react";
import Photo from "../../assets/Photo.jpg";
import Photo1 from "../../assets/Photo1.jpg";
import Photo2 from "../../assets/Photo2.jpg";
import classes from "./Home.module.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const imageShow = [{ img: Photo }, { img: Photo1 }, { img: Photo2 }];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageShow.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageShow.length + 1 ? 2 : prevIndex - 1
    );
  };

  const menuList = [
    { name: "Women Clothes" },
    { name: "Boy Clothes" },
    { name: "Children Clothes" },
    { name: "Shoes" },
    { name: "Food" },
  ];

  const productList = [
    { name: "Women Clothes", photo: Photo, price: "1000" },
    { name: "Women Clothes", photo: Photo1, price: "1000" },
    { name: "Women Clothes", photo: Photo2, price: "1000" },
    { name: "Women Clothes", photo: Photo, price: "1000" },
  ];

  return (
    <div className={classes.Col1}>
      <div className={classes.Col2}>
        <div className={classes.Col3}>
          <button className={classes.button} onClick={handleNext}>
            Next
          </button>
          <div style={{ display: "flex", width: "100%", height: "100%" }}>
            {imageShow.map((item, index) => (
              <div className={classes.Col4} key={index}>
                <img
                  src={item.img}
                  alt=""
                  className={`${classes.img} ${
                    index === currentIndex ? classes.show : classes.hide
                  }`}
                  key={index}
                />
              </div>
            ))}
          </div>
          <button className={classes.rightbutton} onClick={handlePrev}>
            Prev
          </button>
        </div>
        <div className={classes.productCol1}>
          <div className={classes.productCol2}>
            <div className={classes.menuCol1}>
              <h1 className={classes.productTitle}>All Items</h1>
              <div className={classes.menuCol2}>
                {menuList.map((item) => (
                  <div className={classes.meuCol3}>
                    <p className={classes.menuText}>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.productCol3}>
              {productList.map((item) => (
                <div className={classes.productCol4}>
                  <p>{item.name}</p>
                  <img
                    src={item.photo}
                    alt=""
                    className={classes.productImage}
                  />
                  <div className={classes.priceList}>
                    {" "}
                    <p>Price - {item.price}Kyat</p>
                    <button className={classes.buttonBuy}>Buy</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
