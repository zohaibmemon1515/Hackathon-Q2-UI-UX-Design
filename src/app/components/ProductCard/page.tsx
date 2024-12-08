import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    img: "/assets/img/product1.jpg",
    title: "Men's Leather Jacket",
    department: "Men's Clothing",
    oldPrice: "$120.00",
    newPrice: "$85.00",
  },
  {
    id: 2,
    img: "/assets/img/product2.jpg",
    title: "Women's Denim Jacket",
    department: "Women's Clothing",
    oldPrice: "$95.00",
    newPrice: "$70.00",
  },
  {
    id: 3,
    img: "/assets/img/product3.jpg",
    title: "Men's Casual T-Shirt",
    department: "Men's Clothing",
    oldPrice: "$50.00",
    newPrice: "$35.00",
  },
  {
    id: 4,
    img: "/assets/img/product4.jpg",
    title: "Women's Floral Dress",
    department: "Women's Clothing",
    oldPrice: "$75.00",
    newPrice: "$55.00",
  },
  {
    id: 5,
    img: "/assets/img/product5.jpg",
    title: "Men's Slim Fit Jeans",
    department: "Men's Clothing",
    oldPrice: "$60.00",
    newPrice: "$45.00",
  },
  {
    id: 6,
    img: "/assets/img/product6.jpg",
    title: "Women's Sweater",
    department: "Women's Clothing",
    oldPrice: "$55.00",
    newPrice: "$40.00",
  },
  {
    id: 7,
    img: "/assets/img/product7.jpg",
    title: "Men's Sports Jacket",
    department: "Men's Clothing",
    oldPrice: "$110.00",
    newPrice: "$80.00",
  },
  {
    id: 8,
    img: "/assets/img/product8.jpg",
    title: "Women's Summer Dress",
    department: "Women's Clothing",
    oldPrice: "$75.00",
    newPrice: "$55.00",
  },
  {
    id: 9,
    img: "/assets/img/product9.jpg",
    title: "Men's Casual Shirt",
    department: "Men's Clothing",
    oldPrice: "$45.00",
    newPrice: "$30.00",
  },
  {
    id: 10,
    img: "/assets/img/product10.jpg",
    title: "Wireless Bluetooth Earbuds",
    department: "Electronics",
    oldPrice: "$120.00",
    newPrice: "$85.00",
  },
  {
    id: 11,
    img: "/assets/img/product11.jpg",
    title: "Stainless Steel Watch",
    department: "Accessories",
    oldPrice: "$200.00",
    newPrice: "$150.00",
  },
  {
    id: 12,
    img: "/assets/img/product12.jpg",
    title: "Women's Handbag",
    department: "Women's Accessories",
    oldPrice: "$90.00",
    newPrice: "$65.00",
  },
];
const ProductCard = () => {
  return (
    <div className="flex flex-wrap justify-center xl:gap-[5em] lg:gap-[0.8rem] md:gap-[0.6rem] gap-[2rem] mx-auto container max-w-7xl">
      {products.map((product) => (
        <div
          key={product.id}
          className="text-center shadow-lg border border-gray-200 rounded-lg"
          style={{ width: "238px", height: "615px" }}
        >
          <Link href="/components/oneProductPage">
            <div className="relative w-full h-2/3 mb-4">
              <Image
                src={product.img}
                alt={`Product ${product.title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-base"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">{product.title}</h3>
            <p className="text-gray-500 text-sm mb-2">{product.department}</p>
            <div className="flex justify-center items-center gap-1">
              <p className="text-gray-500 text-sm line-through">
                {product.oldPrice}
              </p>
              <p className="text-green-600 text-base font-bold">
                {product.newPrice}
              </p>
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full inline-block"></span>
              <span className="w-4 h-4 bg-green-500 rounded-full inline-block"></span>
              <span className="w-4 h-4 bg-red-500 rounded-full inline-block"></span>
              <span className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></span>
              <span className="w-4 h-4 bg-gray-500 rounded-full inline-block"></span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
