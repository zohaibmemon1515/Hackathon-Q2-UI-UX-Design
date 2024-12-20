import Image from "next/image";
const Carousel3 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:h-full h-full bg-blue-600">
      <div className="max-w-4xl container flex lg:justify-between justify-center text-center items-center lg:h-full h-screen ">
        <div className="text-center lg:text-left md:w-1/2">
          <h2 className="text-white text-sm font-bold mb-2">WORK WITH US</h2>
          <h1 className="text-white text-4xl font-bold mb-4">
            Now Let&apos;s grow Yours
          </h1>
          <p className="text-white text-base mb-6">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <button className="px-6 py-2 border border-white text-white rounded">
            Button
          </button>
        </div>
        <div className="w-[45%] h-[490px] hidden lg:block">
          <Image
            alt="A person wearing a peach-colored long-sleeve shirt and white pants"
            className="w-full h-full object-cover"
            height="800"
            src="https://media.istockphoto.com/id/1135773946/photo/full-length-portrait-of-young-man-standing-on-white-background.jpg?s=170667a&w=0&k=20&c=1q9ttS0q2mXGJRNIsZGhhqNvrToT9zQdtlAutLxxtzk="
            width="600"
          />
        </div>
      </div>
    </div>
  );
};
export default Carousel3;
