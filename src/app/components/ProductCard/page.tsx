import React from "react";
import Image from "next/image";

interface ProductCardProps {
  img: string;
  title: string;
  department: string;
  oldPrice: string;
  newPrice: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  img,
  title,
  department,
  oldPrice,
  newPrice,
}) => {
  return (
    <div
      className="text-center shadow-lg border border-gray-200 rounded-lg"
      style={{ width: "238px", height: "615px" }}
    >
      <div className="relative w-full h-2/3 mb-4">
        <Image
          src={img}
          alt={`Product ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-base"
        />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{department}</p>
      <div className="flex justify-center items-center gap-1">
        <p className="text-gray-500 text-sm">{oldPrice}</p>
        <p className="text-green-600 text-base font-bold">{newPrice}</p>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        <span className="w-4 h-4 bg-blue-500 rounded-full inline-block"></span>
        <span className="w-4 h-4 bg-green-500 rounded-full inline-block"></span>
        <span className="w-4 h-4 bg-red-500 rounded-full inline-block"></span>
        <span className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></span>
        <span className="w-4 h-4 bg-gray-500 rounded-full inline-block"></span>
      </div>
    </div>
  );
};

export default ProductCard;
