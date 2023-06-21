import React from "react";
import "./shop.css";
import { Product } from "../index";
import { RxCaretRight } from "react-icons/rx";

const Shop = () => {
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  const data = {
    products: [
      {
        id: 51,
        title: "half sleeves T shirts",
        description:
          "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
        price: 23,
        discountPercentage: 12.76,
        rating: 4.26,
        stock: 132,
        brand: "Vintage Apparel",
        category: "mens-shirts",
        thumbnail: "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/51/1.png",
          "https://i.dummyjson.com/data/products/51/2.jpg",
          "https://i.dummyjson.com/data/products/51/3.jpg",
          "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
        ],
      },
      {
        id: 52,
        title: "FREE FIRE T Shirt",
        description:
          "quality and professional print - It doesn't just look high quality, it is high quality.",
        price: 10,
        discountPercentage: 14.72,
        rating: 4.52,
        stock: 128,
        brand: "FREE FIRE",
        category: "mens-shirts",
        thumbnail: "https://i.dummyjson.com/data/products/52/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/52/1.png",
          "https://i.dummyjson.com/data/products/52/2.png",
          "https://i.dummyjson.com/data/products/52/3.jpg",
          "https://i.dummyjson.com/data/products/52/4.jpg",
          "https://i.dummyjson.com/data/products/52/thumbnail.jpg",
        ],
      },
      {
        id: 53,
        title: "printed high quality T shirts",
        description: "Brand: vintage Apparel ,Export quality",
        price: 35,
        discountPercentage: 7.54,
        rating: 4.89,
        stock: 6,
        brand: "Vintage Apparel",
        category: "mens-shirts",
        thumbnail: "https://i.dummyjson.com/data/products/53/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/53/1.webp",
          "https://i.dummyjson.com/data/products/53/2.jpg",
          "https://i.dummyjson.com/data/products/53/3.jpg",
          "https://i.dummyjson.com/data/products/53/4.jpg",
          "https://i.dummyjson.com/data/products/53/thumbnail.jpg",
        ],
      },
      {
        id: 54,
        title: "Pubg Printed Graphic T-Shirt",
        description:
          "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
        price: 46,
        discountPercentage: 16.44,
        rating: 4.62,
        stock: 136,
        brand: "The Warehouse",
        category: "mens-shirts",
        thumbnail: "https://i.dummyjson.com/data/products/54/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/54/1.jpg",
          "https://i.dummyjson.com/data/products/54/2.jpg",
          "https://i.dummyjson.com/data/products/54/3.jpg",
          "https://i.dummyjson.com/data/products/54/4.jpg",
          "https://i.dummyjson.com/data/products/54/thumbnail.jpg",
        ],
      },
      {
        id: 55,
        title: "Money Heist Printed Summer T Shirts",
        description: "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
        price: 66,
        discountPercentage: 15.97,
        rating: 4.9,
        stock: 122,
        brand: "The Warehouse",
        category: "mens-shirts",
        thumbnail: "https://i.dummyjson.com/data/products/55/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/55/1.jpg",
          "https://i.dummyjson.com/data/products/55/2.webp",
          "https://i.dummyjson.com/data/products/55/3.jpg",
          "https://i.dummyjson.com/data/products/55/4.jpg",
          "https://i.dummyjson.com/data/products/55/thumbnail.jpg",
        ],
      },
    ],
    total: 5,
    skip: 0,
    limit: 5,
  };
  return (
    <div className="shop">
      <div className="shop-main">
        <ul className="shop-left">
          <p className="shop-details">catogories</p>
          {categories.map((data) => {
            return (
              <li>
                <a href="">{data}</a>
                <RxCaretRight size={20} />
              </li>
            );
          })}
        </ul>
        <div className="shop-right">
          <p className="shop-details">men's shirts, 8 results</p>
          <div className="shop-grid">
            {data.products.map((data) => {
              return <Product data={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
