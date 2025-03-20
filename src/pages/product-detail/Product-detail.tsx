import React from "react";
import Photo from "../../assets/Photo.jpg";
import classes from "./Product-detail.module.css";
import Photo1 from "../../assets/Photo1.jpg";
import Photo2 from "../../assets/Photo2.jpg";
import Photo5 from "../../assets/image1.jpg";
import Photo6 from "../../assets/image10.jpg";
import Photo7 from "../../assets/image11.jpg";
import Photo8 from "../../assets/image12.jpg";
import Photo9 from "../../assets/iamge9.jpg";
import Photo10 from "../../assets/photo6.jpg";
import Photo11 from "../../assets/photo7.jpg";
import Photo12 from "../../assets/photo8.jpg";

const ProductDetail = () => {
  const slider = [
    { img: Photo },
    { img: Photo1 },
    { img: Photo2 },
    { img: Photo5 },
    { img: Photo6 },
    { img: Photo7 },
    { img: Photo8 },
    { img: Photo10 },
    { img: Photo11 },
    { img: Photo12 },
  ];
  return (
    <div className={classes.DetailCol1}>
      <div className={classes.DetailCol2}>
        <h1 className={classes.DetailTitle}>Product Detail</h1>
        <div className={classes.detailCol3}>
          <div>
            <img src={Photo} alt="" className={classes.img} />
          </div>
          <div>
            <p>Women's Clothes</p>
            <p>Price - 1000Kyat</p>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat
            suscipit numquam alias obcaecati nulla error cupiditate molestias
            eligendi maxime dignissimos accusamus, facilis corporis quia eius
            odio consectetur libero amet!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure fugiat suscipit numquam alias obcaecati nulla
            error cupiditate molestias eligendi maxime dignissimos accusamus,
            facilis corporis quia eius odio consectetur libero amet!
          </p>
        </div>
      </div>

      <div className={classes.detailSliderCol1}>
        <div className={classes.detailSliderCol2}>
          {slider.map((item) => (
            <div className={classes.detailSliderCol3}>
              <img src={item.img} alt="" className={classes.sliderImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
