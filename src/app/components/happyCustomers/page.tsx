import Image from "next/image";

const CustomerRow = (): JSX.Element => {
  return (
    <div className="bg-white flex items-center justify-center lg:h-[175px] h-full lg:mt-0 mt-20">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[40px] gap-[85px] justify-center items-center">
          <div className="flex-col justify-center items-center hover:border-2 hover:border-black hover:p-3">
            <h1 className="text-black text-4xl font-bold text-center mb-2">15K</h1>
            <p className="text-black text-xs font-semibold opacity-80 text-center justify-center">
              Happy Customers
            </p>
          </div>
          <div className="flex-col justify-center items-center hover:border-2 hover:border-black hover:p-3">
            <h1 className="text-black text-4xl font-bold text-center mb-2">150K</h1>
            <p className="text-black text-xs font-semibold opacity-80 text-center justify-center">
            Monthly Visitors
            </p>
          </div>
          <div className="flex-col justify-center hover:border-2 hover:border-black hover:p-3">
            <h1 className="text-black text-4xl font-bold text-center mb-2">15</h1>
            <p className="text-black text-xs font-semibold opacity-80 text-center justify-center">
             Countries Worldwide
            </p>
          </div>
          <div className="flex-col justify-center items-center  hover:border-2 hover:border-black hover:p-3">
            <h1 className="text-black text-4xl font-bold text-center mb-2">100+</h1>
            <p className="text-black text-xs font-semibold opacity-80 text-center justify-center">
              Top Partners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRow;
