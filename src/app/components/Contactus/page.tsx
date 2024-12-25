import Navbar2 from "../Navbar/Navbar2";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import ContactInfo from "../ConatctInfo/page";
import CallToAction from "../CallToAction/page";
import Footer from "../Footer/page";

const ContactUs = () => {
  return (
    <div>
      <Navbar2 />
      <div className="font-sans h-full bg-white pt-10">
        <main className="flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-y-8 lg:gap-8 container max-w-4xl px-6 py-20 md:py-14 lg:py-6 mx-auto">
       
          <div className="flex-1 text-center lg:text-left space-y-3">
            <h2 className="text-[#252B42] text-sm uppercase font-semibold">
              Contact Us
            </h2>
            <h1 className="text-4xl font-bold text-[#252B42]">
              Get in touch today!
            </h1>
            <p className="text-gray-700">
              We know how large objects will act, <br className="hidden md:block" />
              but things on a small scale
            </p>
            <p className="text-[#252B42] font-bold">Phone : +451 215 215</p>
            <p className="text-[#252B42] font-bold">Fax : +451 215 215</p>
            <div className="flex justify-center lg:justify-start space-x-4 text-[#252B42] text-2xl">
              <Link href="#">
                <FaTwitter className="hover:text-[#242a43]" />
              </Link>
              <Link href="#">
                <FaFacebook className="hover:text-[#242a43]" />
              </Link>
              <Link href="#">
                <FaInstagram className="hover:text-[#242a43]" />
              </Link>
              <Link href="#">
                <FaLinkedin className="hover:text-[#242a43]" />
              </Link>
            </div>
          </div>

        
          <div className="flex justify-center w-full md:w-1/2 relative lg:mt-0 md:mt-8 mt-0">
            <div className="absolute top-12 left-20 bg-pink-100 rounded-full w-64 h-64 transform -translate-x-1/4 -translate-y-1/4 hidden lg:block"></div>
            <Image
              src="/assets/img/ContactHero.png"
              alt="Family Shopping"
              width={500}
              height={500}
              className="z-10 w-full h-auto object-cover"
            />
          </div>
        </main>
      </div>
      <ContactInfo/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default ContactUs;
