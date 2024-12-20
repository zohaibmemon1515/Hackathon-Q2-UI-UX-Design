import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="font-sans h-full bg-blue-500 pt-10">
      <div className="lg:justify-between justify-center flex items-center gap-y-6 lg:h-full h-screen container max-w-4xl">
        <div className="text-center md:text-center lg:text-left sm:flex sm:flex-col sm:items-center lg:items-start md:w-[25rem]">
          <p className="text-white uppercase tracking-wide text-sm mb-7 lg:text-sm font-semibold">
            Exclusive Launch
          </p>
          <h1 className="text-white lg:text-4xl text-4xl font-bold lg:leading-[32px]">
            Unveiling the Future
          </h1>
          <p className="text-white mt-7 text-base lg:text-base leading-relaxed opacity-80">
            Experience the essence of style crafted to perfection Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/components/ProductList">
            <button
              type="button"
              className="bg-green-500 mt-5 transition-all text-white font-bold text-lg rounded-md px-4 py-2"
            >
              Discover Now
            </button>
          </Link>
        </div>

        <div className="lg:flex hidden items-center justify-center">
          <Image
            src="/assets/img/aboutus.png"
            alt="Stylish model showcasing products"
            className="w-full h-[450px] object-cover"
            width={720}
            height={560}
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}
