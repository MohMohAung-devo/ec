import { useState } from "react";
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
import { count } from "console";
import { Link } from "react-router-dom";

interface producttype {
  id: number;
  name: string;
  category: string;
  photo: string;
  price: string;
}

interface menuType {
  name: string;
}
export const Product = () => {
  const [show, setShow] = useState<string>("All Items");
  const [activeColor, setActiveColor] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedId, setselectedId] = useState<number[]>([]);
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

  const menuList: menuType[] = [
    { name: "All Items" },
    { name: "Women Clothes" },
    { name: "Boy Clothes" },
    { name: "Children Clothes" },
    { name: "Shoes" },
    { name: "Food" },
  ];

  const productList: producttype[] = [
    {
      id: 1,
      name: "Women Clothes",
      category: "Women Clothes",
      photo: Photo,
      price: "1000",
    },
    {
      id: 2,
      name: "Women Clothes",
      category: "Women Clothes",
      photo: Photo1,
      price: "1000",
    },
    {
      id: 3,
      name: "Women Clothes",
      category: "Men Clothes",
      photo: Photo2,
      price: "1000",
    },
    {
      id: 4,
      name: "Women Clothes",
      category: "Women Clothes",
      photo: Photo11,
      price: "1000",
    },
    {
      id: 5,
      name: "Women Clothes",
      category: "Boy Clothes",
      photo: Photo5,
      price: "1000",
    },
    {
      id: 8,
      name: "Women Clothes",
      category: "Women Clothes",
      photo: Photo6,
      price: "1000",
    },
    {
      id: 6,
      name: "Women Clothes",
      category: "Shoes",
      photo: Photo12,
      price: "1000",
    },
    {
      id: 7,
      name: "Women Clothes",
      category: "Food",
      photo: Photo10,
      price: "1000",
    },
  ];

  const handleActive = () => setActiveColor(!activeColor);

  const filterProductItem =
    show === "All Items"
      ? productList
      : productList.filter((item) => item.category === show);

  console.log("filterProduct", filterProductItem);

  const handleCount = (index: number) => {
    setCount(count + 1);
    setselectedId((prv) => [...prv, index]);
    console.log("id number ", index);
  };

  return (
    <div className={classes.productCol1}>
      <div className={classes.productCol2}>
        <h1 className={classes.title}>Product All</h1>

        <div className={classes.productCol3}>
          <div className={classes.productCol4}>
            <div className={classes.productCol5}>
              {menuList.map((item, index) => (
                <div className={classes.productCol6} key={index}>
                  <p
                    onClick={() => setShow(item.name)}
                    style={{ cursor: "pointer" }}
                    className={`${classes.menuText} ${
                      show === item.name ? classes.sactive : ""
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <div className={classes.cartContainer}>
              <Link to="/cart" className={classes.button}>
                Cart
              </Link>
              <p className={classes.count}>{count}</p>
            </div>
          </div>
          <div className={classes.productCol7}>
            {filterProductItem.map((item, index) => (
              <div className={classes.productCol8} key={index}>
                <div className={classes.addContainer}>
                  {" "}
                  <p>{item.name}</p>
                  <button
                    className={classes.buttonAdd}
                    onClick={() => handleCount(index)}
                  >
                    Add
                  </button>
                </div>

                <img
                  src={item.photo}
                  alt=""
                  className={classes.img}
                  style={{ width: "80%", height: "60%" }}
                />
                <div className={classes.priceList}>
                  <p>P-{item.price}Kyat</p>
                  <div className={classes.ratingList}>
                    {" "}
                    <p>Rating</p>
                    <div className={classes.ratingContainer}>
                      <div
                        className={`${classes.rating} `}
                        onClick={handleActive}
                      ></div>
                      <div className={classes.rating}></div>
                      <div className={classes.rating}></div>
                      <div className={classes.rating}></div>
                      <div className={classes.rating}></div>
                    </div>
                  </div>
                </div>
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
