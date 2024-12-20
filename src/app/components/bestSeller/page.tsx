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
];
const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 md:gap-[1.7rem] gap-10">
    {products.map((product) => (
      <div
        key={product.id}
        className="relative group h-[36rem] w-full overflow-hidden rounded-xl shadow-lg border border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
          <Link href="/components/oneProductPage">
            <div className="relative w-full h-2/3 mb-4">
              <Image
                src={product.img}
                alt={`Product ${product.title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="font-bold text-lg mb-2 pl-2 mt-6">
              {product.title}
            </h3>
            <p className="text-gray-500 text-sm mb-2 pl-2 mt-3">
              {product.department}
            </p>
            <div className="flex items-center gap-2 pl-2 mt-3">
              <p className="text-gray-500 text-sm line-through">
                {product.oldPrice}
              </p>
              <p className="text-green-600 text-base font-bold">
                {product.newPrice}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

const BestSeller = (): JSX.Element => {
  return (
    <div className="bg-[#FAFAFA] p-6 rounded-lg">
      <div className="container max-w-4xl mt-5 mb-10 grid justify-start items-center">
        <div className="flex justify-center md:justify-start items-center pb-10">
          <h1 className="text-[#252B42] text-2xl text-center md:text-left font-bold">
            BESTSELLER PRODUCTS
          </h1>
        </div>

        <hr className="border-t border-[#BDBDBD] border-[1px] container max-w-4xl" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:flex md:flex gap-y-[80px] mt-8 mb-16">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
