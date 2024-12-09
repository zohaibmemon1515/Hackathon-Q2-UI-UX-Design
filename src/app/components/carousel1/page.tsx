import Image from "next/image";

const Carousel1 = (): JSX.Element => {
  return (
    <div className="font-sans bg-[#23856D]">
      <div className="container flex flex-col lg:flex-row items-center gap-y-6 max-w-7xl mx-auto h-full">
        <div className="text-center lg:text-left sm:flex sm:flex-col sm:items-center lg:items-start sm:p-12 p-4 md:mt-20 lg:mt-0 mt-24">
          <p className="text-white uppercase tracking-wide text-sm mb-8">
            Summer 2020
          </p>
          <h1 className="text-white xl:text-6xl lg:text-[2.8rem] text-5xl font-bold lg:leading-[56px]">
            Vita Classic <br className="block lg:hidden" /> Product
          </h1>
          <p className="text-white mt-8 md:text-xl leading-relaxed text-lg">
            We know how large objects will act,{" "}
            <br className="hidden lg:block" />
            we know how objects will act, we know...
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-5 mt-8">
            <p className="text-white text-2xl font-bold">$16.48</p>
            <button
              type="button"
              className="bg-[#2DC071] transition-all text-white font-bold text-xl rounded-md px-6 py-3"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center lg:flex lg:ml-10 lg:mt-0">
          <Image
            src="/assets/img/carousel1.png"
            alt="Vita Classic Product"
            className="w-full h-auto object-cover"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
