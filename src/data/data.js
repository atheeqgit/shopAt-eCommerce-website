export const dummyData = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
  ],
  total: 100,
  skip: 0,
  limit: 5,
};

export const bannerData = [
  {
    title:
      "Unlock Endless Possibilities: Dress to Inspire, Create and Captivate",
    imgPath: "banner9.jpg",
  },
  {
    title:
      "Technology is the only thing that has an ability to connect you to the world",
    imgPath: "banner6.jpg",
  },
  {
    title:
      "Curated Fashion Experiences: Unveiling the Perfect Blend of Elegance and Modernity",
    imgPath: "banner5.jpg",
  },
  {
    title: "Discover Your Signature Style and Make a Lasting Impression.",
    imgPath: "banner3.jpg",
  },
  {
    title:
      "Fashion Forward, Sustainable Choices: Dress Responsibly, Leave a Positive Impact",
    imgPath: "banner4.jpg",
  },
];

export const brandData = [
  "brand1.png",
  "brand2.jpg",
  "brand3.jpg",
  "brand4.png",
  "brand5.png",
  "brand6.png",
];

export const picksData = [
  {
    title: "men",
    src: "picksmen.jpeg",
  },
  {
    title: "women",
    src: "pickswomen2.png",
  },
  {
    title: "Mobile",
    src: "picksmobile2.jpeg",
  },
  {
    title: "jwellery",
    src: "picksjwellery.jpeg",
  },
];

export const featuredData = [
  {
    id: 21,
    title: "brown shirt",
    thumbnail: "/public/picksmen.jpeg",
    price: "$100",
  },

  {
    id: 22,
    title: "women's lehenga",
    thumbnail: "/public/pickswomen2.png",
    price: "$100",
  },

  {
    id: 23,
    title: "iphone-12pro max",
    thumbnail: "/public/picksmobile2.jpeg",
    price: "$100",
  },

  {
    id: 24,
    title: "gold jimmiky",
    thumbnail: "/public/picksjwellery.jpeg",
    price: "$100",
  },

  {
    id: 25,
    title: "mens-shirt",
    thumbnail: "/public/picksmen.jpeg",
    price: "$100",
  },
];

// reponsive ----------------------------------------------------

export const BannerResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const featuredResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};
