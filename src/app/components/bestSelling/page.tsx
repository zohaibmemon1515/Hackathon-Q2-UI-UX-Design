import ProductCard from "../ProductCard/page";

const BestSelling = (): JSX.Element => {
  return (
    <div className="mx-auto max-w-7xl mt-[2.5rem] mb-10 flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-gray-500 mb-1">Featured Products</h2>
        <h1 className="text-2xl font-bold text-[#252B42] mb-1">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-gray-500 mb-1">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:flex md:flex gap-8 gap-y-[80px] mt-10 mb-16">
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSelling;
