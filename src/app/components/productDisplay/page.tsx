import ProductCard from "../ProductCard/page";
const ProductDisplay = (): JSX.Element => {
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
  return (
    <div className="max-w-4xl container mt-8 flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-gray-500 mb-1">Our Top Picks</h2>
        <h1 className="text-2xl font-bold text-[#252B42] mb-1">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-gray-500 mb-1">
          Discover the most loved products our customers can&apos;t get enough of.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:flex md:flex gap-8 gap-y-[80px] mt-8 mb-16">
       <ProductCard/>
      </div>
    </div>
  );
};

export default ProductDisplay;
