import TopBarGreen from "../topBar/TopBarGreen";
import Navbar3 from "../Navbar/Navbar3";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { FaTh, FaList, FaCaretDown } from "react-icons/fa";
import ClientRow from "../clientRow/page";
import Footer from "../Footer/page";
import Productsall from "../Productsall/page";

const ProductList = () => {
  const items = [
    {
      imgSrc: "/assets/img/Cloth1.jpg",
      alt: "Woman in black outfit",
      title: "CLOTHS",
      count: "5 Items",
    },
    {
      imgSrc: "/assets/img/Cloth2.jpg",
      alt: "Woman in blue outfit",
      title: "CLOTHS",
      count: "5 Items",
    },
    {
      imgSrc: "/assets/img/Cloth3.jpg",
      alt: "Woman in white outfit",
      title: "CLOTHS",
      count: "5 Items",
    },
    {
      imgSrc: "/assets/img/Cloth4.jpg",
      alt: "Two women smiling",
      title: "CLOTHS",
      count: "5 Items",
    },
    {
      imgSrc: "/assets/img/Cloth5.jpg",
      alt: "Two women with skateboards",
      title: "CLOTHS",
      count: "5 Items",
    },
  ];

  return (
    <>
      <TopBarGreen />
      <Navbar3 />

      <div className="py-10 px-24 bg-gray-100">
        <div className="flex flex-col sm:flex-row container max-w-7xl justify-center sm:justify-between items-center sm:items-start space-y-5 sm:space-y-0">
          <div className="text-4xl font-semibold text-gray-800 text-center sm:text-left">
            Shop
          </div>
          <div className="flex items-center space-x-2 text-gray-400 justify-center sm:justify-end">
            <span className="font-semibold text-gray-800">Home</span>
            <FaChevronRight />
            <span>Shop</span>
          </div>
        </div>
      </div>

      <div className="py-10 bg-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative w-[240px] h-[230px] mx-auto md:mx-0 md:h-[250px] md:w-full"
              >
                <Image
                  src={item.imgSrc}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p>{item.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between p-10 container max-w-7xl">
        =
        <div className="text-gray-500 font-semibold w-full sm:w-auto text-center sm:text-left">
          Showing all 12 results
        </div>
        <div className="flex items-center space-x-2 mx-auto w-full sm:w-auto mt-4 sm:mt-0 justify-center">
          <span className="text-gray-500 font-semibold">Views:</span>
          <button className="p-2 border rounded">
            <FaTh className="text-blue-900" />
          </button>
          <button className="p-2 border rounded">
            <FaList className="text-gray-600" />
          </button>
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-auto mt-4 sm:mt-0 justify-center sm:justify-start">
          <button className="p-2 px-6 bg-gray-100 font-light border rounded text-gray-600 flex items-center">
            Popularity <FaCaretDown className="ml-1" />
          </button>
          <button className="p-2 px-5 bg-blue-500 font-semibold text-white rounded">
            Filter
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <ClientRow />
        <Footer />
      </div>
      <Productsall />
      <div className="block lg:hidden">
        <ClientRow />
        <Footer />
      </div>
    </>
  );
};

export default ProductList;
