import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import ProductDescription from "../productdescription/page";
import BestSeller from "../bestSeller/page";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineEye,
} from "react-icons/ai";
import {
  MdChevronLeft,
  MdChevronRight,
  MdStar,
  MdStarHalf,
} from "react-icons/md";
import TopBarGreen from "../topBar/TopBarGreen";
import Navbar3 from "../Navbar/Navbar3";
import ClientRow from "../clientRow/page";
import Footer from "../Footer/page";

const OneProductPage = () => {
  return (
    <div>
      <TopBarGreen />
      <Navbar3 />

      <div className="py-10 px-24 bg-gray-100">
        <div className="flex flex-col sm:flex-row container max-w-7xl justify-start items-center sm:items-start space-y-5 sm:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400 justify-start ">
            <span className="font-semibold text-gray-800">Home</span>
            <FaChevronRight />
            <span>Shop</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl container mx-auto gap-8 mb-16 mt-2">
        <div className="relative w-full md:w-1/2">
          <div className="relative h-[420px] md:h-[500px]">
            <Image
              src="https://storage.googleapis.com/a1aa/image/W69NE6h3Fir1Gh4sFi6gbcqpi3MntS0FcC3vZTJuhvpnfk8JA.jpg"
              alt="Yellow sofa with a blue pillow"
              width={600}
              height={600}
              className=" w-full h-full object-cover"
            />

            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
              <MdChevronLeft size={30} />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
              <MdChevronRight size={30} />
            </button>
          </div>

          <div className="flex space-x-2 mt-5">
            <Image
              src="https://storage.googleapis.com/a1aa/image/eiiYKjtqXAxtESF2Ir8KVFK8DvjQga0CfwDPJT7emMFe5nkPB.jpg"
              alt="Thumbnail 1"
              width={100}
              height={100}
              className="w-35 h-20 object-cover"
            />
            <Image
              src="https://storage.googleapis.com/a1aa/image/7JR3ahvUAO6aFBBPsT7ei6E1XEckjxTBntcah67KNyUOfJ5TA.jpg"
              alt="Thumbnail 2"
              width={100}
              height={100}
              className="w-35 h-20 object-cover"
            />
          </div>
        </div>

        <div className="md:flex-1 mt-3">
          <h1 className="text-2xl font-semibold text-[#252B42]">
            Floating Phone
          </h1>
          <div className="flex items-center mt-4">
            <div className="flex text-yellow-500">
              <MdStar size={20} />
              <MdStar size={20} />
              <MdStar size={20} />
              <MdStar size={20} />
              <MdStarHalf size={20} />
            </div>
            <span className="ml-2 text-gray-600">10 Reviews</span>
          </div>
          <div className="text-3xl font-bold text-[#252B42] mt-6">
            $1,139.33
          </div>
          <div className="text-gray-600 mt-2">
            <span className="font-semibold">Availability: </span>
            <span className="text-[#23A6F0] font-bold">In Stock</span>
          </div>
          <p className="text-gray-600 mt-7 text-base border-b-2 border-gray-300 pb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            nisi accusantium eos iure voluptatem, expedita sint veniam
            aspernatur Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Delectus amet corporis quas recusandae minus. Adipisci reprehenderit
            amet velit quisquam autem, laboriosam ad! Facere odio doloribus sed
            ad dolorum quo consequatur..
          </p>
          <div className="flex items-center mt-6 space-x-3">
            <div className="w-7 h-7 bg-blue-500 rounded-full"></div>
            <div className="w-7 h-7 bg-green-500 rounded-full"></div>
            <div className="w-7 h-7 bg-orange-500 rounded-full"></div>
            <div className="w-7 h-7 bg-black rounded-full"></div>
          </div>
          <div className="flex justify-start items-center gap-4 mt-12">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-sm">
              Select Options
            </button>
            <div className="flex items-center mt-6 space-x-4">
              <button className="text-gray-600">
                <AiOutlineHeart size={24} />
              </button>
              <button className="text-gray-600">
                <AiOutlineShoppingCart size={24} />
              </button>
              <button className="text-gray-600">
                <AiOutlineEye size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductDescription/>
      <BestSeller/>
      <ClientRow/>
      <Footer/>
    </div>
  );
};

export default OneProductPage;
