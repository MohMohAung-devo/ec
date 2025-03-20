import React from "react";
import Photo from "../../assets/Photo.jpg";
import Photo1 from "../../assets/Photo1.jpg";
import Photo2 from "../../assets/Photo2.jpg";
import classes from "./Product.module.css";
import Photo5 from "../../assets/image1.jpg";
import Photo6 from "../../assets/image10.jpg";
import Photo7 from "../../assets/image11.jpg";
import Photo8 from "../../assets/image12.jpg";
import Photo9 from "../../assets/iamge9.jpg";
import Photo10 from "../../assets/photo6.jpg";
import Photo11 from "../../assets/photo7.jpg";
import Photo12 from "../../assets/photo8.jpg";
export const Product = () => {
  const sliderShow = [
    { img: Photo },
    { img: Photo1 },
    { img: Photo2 },

    { img: Photo5 },
    { img: Photo6 },
    { img: Photo7 },
    { img: Photo8 },
    { img: Photo9 },
    { img: Photo10 },
    { img: Photo11 },
    { img: Photo12 },
  ];

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
    { name: "Women Clothes", photo: Photo11, price: "1000" },
    { name: "Women Clothes", photo: Photo5, price: "1000" },
    { name: "Women Clothes", photo: Photo6, price: "1000" },
    { name: "Women Clothes", photo: Photo12, price: "1000" },
    { name: "Women Clothes", photo: Photo10, price: "1000" },
  ];

  return (
    <div className={classes.productCol1}>
      <div className={classes.productCol2}>
        <h1 className={classes.title}>Product All</h1>
        <div className={classes.productCol3}>
          <div className={classes.productCol4}>
            <h2>All Item</h2>
            <div className={classes.productCol5}>
              {menuList.map((item) => (
                <div className={classes.productCol6}>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={classes.productCol7}>
            {productList.map((item) => (
              <div className={classes.productCol8}>
                <p>{item.name}</p>
                <img
                  src={item.photo}
                  alt=""
                  className={classes.img}
                  style={{ width: "80%", height: "60%" }}
                />
                <p>Price - {item.price}Kyat</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.sliderCol1}>
        <h2>Popular Item</h2>
        <div className={classes.sliderCol2}>
          {sliderShow.map((item) => (
            <div className={classes.sliderCol3}>
              <img src={item.img} className={classes.sliderImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
