import Image from "next/image";

const Carousel2 = (): JSX.Element => {
  return (
    <>
      <div className="h-[707px] bg-white hidden md:block">
        <div className="container flex flex-col md:flex-row items-center justify-center p-4 h-full max-w-7xl">
          <div className="md:w-1/2">
            <Image
              src="/assets/img/manMaflar.png"
              alt="A happy couple wrapped in a red and black checkered scarf"
              className="w-full h-auto"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0 md:ml-8">
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Summer 2020
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              Part of the Neural <br /> Universe
            </h1>
            <p className="text-gray-600 mt-4">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mr-2">
                Buy Now
              </button>
              <button className="bg-transparent text-green-500 font-bold py-2 px-4 rounded border border-green-500">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white block md:hidden">
        <div className="container flex flex-col md:flex-row items-center justify-center p-4">
          <div className="md:w-1/2 text-center md:text-left mt-16 md:mt-0 md:ml-8">
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Summer 2020
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              Part of the Neural <br /> Universe
            </h1>
            <p className="text-gray-600 mt-4">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="bg-[#23A6F0] text-white font-bold py-2 px-4 rounded mr-2">
                Buy Now
              </button>
              <button className="bg-transparent text-[#23A6F0] font-bold py-2 px-4 rounded border border-[#23A6F0]">
                Read More
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 mb-10">
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

export default Carousel2;
