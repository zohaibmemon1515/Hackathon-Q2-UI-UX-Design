import ClientRow from "../clientRow/page";
import ProductCard from "../ProductCard/page";
import Footer from "../Footer/page";

const Productsall = (): JSX.Element => {
  return (
    <div className="mx-auto max-w-7xl mt-[4rem] mb-14 flex flex-col items-center">
    
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-[5.5rem]">
      

        <ProductCard />
      </div>

    
      <div className="flex justify-center items-center mt-14">
        <button className="py-5 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white">
          First
        </button>
        <button className="py-4 px-4 bg-gray-200 text-gray-700 border-l border-gray-300 hover:bg-blue-500 hover:text-white">
          1
        </button>
        <button className="py-4 px-4 bg-gray-200 text-gray-700 border-l border-gray-300 hover:bg-blue-500 hover:text-white">
          2
        </button>
        <button className="py-4 px-4 bg-gray-200 text-gray-700 border-l border-gray-300 hover:bg-blue-500 hover:text-white">
          3
        </button>
        <button className="py-5 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Productsall;
