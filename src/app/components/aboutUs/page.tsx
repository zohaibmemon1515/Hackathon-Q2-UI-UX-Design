import Navbar2 from "../Navbar/Navbar2";
import Link from "next/link";
import Image from "next/image";
import CustomerRow from "../happyCustomers/page";
import MeetOurTeam from "../Team/page";
import ClientRow from "../clientRow/page";
import Footer from "../Footer/page";
import Carousel3 from "../carousel1/Carousel3";

const AboutUs = () => {
  return (
    <div>
      <Navbar2 />
      <div className="font-sans h-full bg-white mt-10">
        <div className="lg:justify-between flex flex-col lg:flex-row items-center gap-y-6 lg:h-full h-full container max-w-4xl">
          <div className="text-center md:text-center lg:text-left flex flex-col items-center lg:items-start md:w-[25rem] lg:mt-0 mt-10">
            <p className="text-black uppercase tracking-wide text-sm mb-7 lg:text-sm font-semibold">
              ABOUT COMPANY
            </p>
            <h1 className="text-black lg:text-4xl text-4xl font-bold lg:leading-[32px]">
              ABOUT US
            </h1>
            <p className="text-black mt-7 text-base lg:text-base leading-relaxed opacity-80">
              We Know how large objects will act, but things on a small scale
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </p>
            <Link href="/components/ProductList">
              <button
                type="button"
                className="bg-blue-500 uppercase mt-5 transition-all text-white font-bold text-xs rounded-md px-4 py-3"
              >
                get quote now
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center mt-24 lg:mt-0">
            <Image
              src="/assets/img/aboutus.png"
              alt="Stylish model showcasing products"
              className="w-full h-[300px] md:h-[450px] lg:h-[450px] object-cover"
              width={720}
              height={560}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
      <CustomerRow />
      <MeetOurTeam />

      <div className="bg-gray-100 flex items-center justify-center lg:h-full h-full">
        <div className="container max-w-4xl mb-20 lg:mt-5 mt-24">
          <h1 className="text-center text-3xl font-bold mt-10 opacity-85 ">
            Big Companies Are Here
          </h1>
          <p className="text-gray-600 mb-8 text-center text-sm mt-5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-[40px] gap-[85px] justify-center items-center mt-8">
            <div className="flex justify-center items-center hover:border-2 hover:border-black hover:p-3">
              <Image
                src="/assets/img/Log1.png"
                alt="logo"
                width={100}
                height={50}
                className="w-auto h-auto object-cover"
              />
            </div>
            <div className="flex justify-center items-center hover:border-2 hover:border-black hover:p-3">
              <Image
                src="/assets/img/log2.png"
                alt="logo"
                width={100}
                height={50}
                className="w-auto h-auto object-cover"
              />
            </div>
            <div className="flex justify-center hover:border-2 hover:border-black hover:p-3">
              <Image
                src="/assets/img/Log3.png"
                alt="logo"
                width={100}
                height={50}
                className="w-auto h-auto object-cover"
              />
            </div>
            <div className="flex justify-center items-center  hover:border-2 hover:border-black hover:p-3">
              <Image
                src="/assets/img/log4.png"
                alt="logo"
                width={100}
                height={50}
                className="w-auto h-auto object-cover"
              />
            </div>
            <div className="flex justify-center items-center  hover:border-2 hover:border-black hover:p-3">
              <Image
                src="/assets/img/log5.png"
                alt="logo"
                width={100}
                height={50}
                className="w-auto h-auto object-cover"
              />
            </div>
            <div className="flex justify-center items-center  hover:border-2 hover:border-black hover:p-3">
              <Image
                src="/assets/img/log6.png"
                alt="logo"
                width={100}
                height={50}
                className="w-auto h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Carousel3/>
      <Footer/>
    </div>
  );
};

export default AboutUs;
