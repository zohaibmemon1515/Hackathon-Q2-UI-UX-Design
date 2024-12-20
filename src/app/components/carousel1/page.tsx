import Image from "next/image";
import Link from "next/link";

const Carousel1 = (): JSX.Element => {
  return (
    <div className="font-sans h-full bg-gradient-to-br from-[#1C6E5E] to-[#23856D] pt-10">
      <div className="lg:justify-between flex flex-col lg:flex-row items-center gap-y-6 lg:h-full h-full container max-w-4xl">
        <div className="text-center md:text-center lg:text-left flex flex-col items-center lg:items-start md:w-[25rem] lg:mt-0 mt-24">
          <p className="text-white uppercase tracking-wide text-sm mb-7 lg:text-lg">
            Limited Summer Edition
          </p>
          <h1 className="text-white lg:text-4xl text-3xl font-bold lg:leading-[40px]">
            Vita Classic Premium Collection
          </h1>
          <p className="text-white mt-7 text-base lg:text-lg leading-relaxed">
            Elevate your lifestyle with timeless elegance Crafted for those who
            demand the best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-8">
            <p className="text-white text-3xl font-bold">$16.48</p>
            <Link href="/components/ProductList">
              <button
                type="button"
                className="bg-[#2DC071] hover:bg-[#259D63] transition-all text-white font-bold text-lg rounded-md px-4 py-2"
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center mt-24 lg:mt-0">
          <Image
            src="/assets/img/carousel1.png"
            alt="Stylish model showcasing products"
            className="w-full h-[380px] md:h-[450px] lg:h-[450px] object-cover"
            width={720}
            height={560}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
