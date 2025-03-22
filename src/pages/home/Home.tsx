import React, { useEffect, useState } from "react";
import Photo from "../../assets/Photo.jpg";
import Photo1 from "../../assets/Photo1.jpg";
import Photo2 from "../../assets/Photo2.jpg";
import classes from "./Home.module.css";
import Photo4 from "../../assets/photo6.jpg";
import Photo5 from "../../assets/image1.jpg";
import Photo6 from "../../assets/image10.jpg";
import Photo7 from "../../assets/image11.jpg";
import Photo8 from "../../assets/image12.jpg";
import Photo9 from "../../assets/iamge9.jpg";
import Photo10 from "../../assets/photo6.jpg";
import Photo11 from "../../assets/photo7.jpg";
import Photo12 from "../../assets/photo8.jpg";
import Photo13 from "../../assets/photo9.jpg";
import Photo14 from "../../assets/image11.jpg";
import Photo15 from "../../assets/iamge9.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const imageShow = [{ img: Photo }, { img: Photo1 }, { img: Photo2 }];
  const sliderShow = [
    { img: Photo },
    { img: Photo1 },
    { img: Photo7 },
    { img: Photo8 },
    { img: Photo9 },
    { img: Photo2 },
    { img: Photo4 },
    { img: Photo5 },
    { img: Photo6 },
  ];

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

  const productList = [
    { name: "Women Clothes", photo: Photo, price: "1000" },
    { name: "Women Clothes", photo: Photo1, price: "1000" },
    { name: "Women Clothes", photo: Photo2, price: "1000" },
    { name: "Women Clothes", photo: Photo10, price: "1000" },
    { name: "Women Clothes", photo: Photo11, price: "1000" },
    { name: "Women Clothes", photo: Photo12, price: "1000" },
    { name: "Women Clothes", photo: Photo13, price: "1000" },
    { name: "Women Clothes", photo: Photo14, price: "1000" },
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
            <h2>Product</h2>
            <div className={classes.productCol3}>
              {productList.map((item) => (
                <div className={classes.productCol4}>
                  <p>{item.name}</p>
                  <Link to="/product-detail">
                    <img
                      src={item.photo}
                      alt=""
                      className={classes.productImage}
                    />
                  </Link>{" "}
                  <p>Price - {item.price}Kyat</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.sliderCol1}>
          <div className={classes.sliderCol2}>
            {sliderShow.map((item, index) => (
              <div className={classes.sliderCo3}>
                <img src={item.img} className={classes.sliderImg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
