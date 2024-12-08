import Image from "next/image";

const Carousel1 = (): JSX.Element => {
  return (
    <>
      <div className="h-[707px] bg-green-700 hidden md:block">
        <div className="container flex flex-col md:flex-row items-center justify-center p-4 max-w-7xl mx-auto h-full">
          <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0 md:pl-16 lg:pl-32">
            <p className="text-white uppercase tracking-wide text-sm mb-7">
              Summer 2020
            </p>
            <h1 className="text-4xl text-white font-bold mt-2">
              Vita Classic <br /> Product
            </h1>
            <p className="text-white mt-4 text-sm">
              We know how large objects will act, We know how{" "}
              <br className="hidden lg:block" /> large objects will act, We know
            </p>
            <div className="mt-6 flex justify-center md:justify-start items-center gap-6">
              <h3 className="text-white font-semibold text-lg">$16.48</h3>
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mr-2">
                Buy Now
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/assets/img/manMaflar.png"
              alt="A happy couple wrapped in a red and black checkered scarf"
              className="w-full h-auto"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-green-700 block md:hidden">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto h-full">
          <div className="text-center mt-16 md:mt-0 text-white">
            <p className="uppercase tracking-wide text-sm mb-7">Summer 2020</p>
            <h1 className="text-4xl font-bold mt-2">
              Vita Classic <br /> Product
            </h1>
            <p className="mt-4">
              We know how large objects will act, We know how <br /> large
              objects will act, We know
            </p>
            <div className="mt-6 flex justify-center gap-6 items-center">
              <h3 className="font-semibold text-lg">$16.48</h3>
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mr-2">
                Buy Now
              </button>
            </div>
          </div>

          <div className="mt-12 mb-10">
            <Image
              src="/assets/img/manMaflar.png"
              alt="A happy couple wrapped in a red and black checkered scarf"
              className="w-full h-auto"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel1;
