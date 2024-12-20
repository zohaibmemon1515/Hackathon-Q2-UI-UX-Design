import Image from "next/image";
import Link from "next/link";

const Carousel2 = (): JSX.Element => {
  return (
    <div className="font-sans h-full bg-gradient-to-br from-white to-[#F7F7F7]">
      <div className="lg:justify-between justify-center pt-20 md:pt-24 flex flex-col-reverse lg:flex-row items-center lg:h-auto container max-w-4xl gap-8 lg:gap-0 lg:pt-10">
        <div className="flex items-center justify-center mt-24 lg:mt-0">
          <Image
            src="/assets/img/manMaflar.png"
            alt="Stylish model showcasing products"
            className="w-full h-[300px] md:h-[450px] lg:h-[450px] object-cover"
            width={720}
            height={560}
            quality={100}
            priority
          />
        </div>

        <div className="text-center md:text-center lg:text-left sm:flex sm:flex-col sm:items-center lg:items-start md:w-[25rem] mt-20 lg:mt-0">
          <p className="text-gray-500 uppercase tracking-wide text-sm mb-7 lg:text-lg">
            Summer 2024 Collection
          </p>
          <h1 className="text-[#252B42] text-3xl lg:text-4xl font-extrabold leading-tight">
            Neural Universe Exclusive Series
          </h1>
          <p className="text-gray-600 mt-7 text-base lg:text-lg leading-relaxed">
            Discover the cutting-edge design inspired by the cosmos. Experience
            elegance redefined for modern living.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-8">
            <Link href="/components/ProductList">
              <button
                type="button"
                className="bg-[#2DC071] hover:bg-[#259D63] transition-all text-white font-bold text-lg rounded-md px-4 py-2"
              >
                Buy Now
              </button>
            </Link>
            <button
              type="button"
              className="bg-transparent text-[#2DC071] font-bold text-lg rounded-md px-4 py-2 border border-[#2DC071]"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
