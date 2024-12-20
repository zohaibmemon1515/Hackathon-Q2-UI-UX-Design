import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    
    
      <div className="bg-white">
        <footer className="body-font bg-[#FAFAFA]">
          <div className="container py-8 max-w-4xl flex flex-col md:flex-row lg:items-center justify-between">
           
            <Link href="/" passHref>
              <span className="flex title-font font-medium items-center text-gray-900 justify-center md:justify-start">
                <span className="text-xl font-bold">Bandage</span>
              </span>
            </Link>
  
           
            <div className="flex mt-4 lg:mt-0 justify-center md:justify-end items-center">
              <Link href="https://www.facebook.com" passHref>
                <FaFacebook size={20} className="text-[#23A6F0] mx-2" />
              </Link>
              <Link href="https://www.instagram.com" passHref>
                <FaInstagram size={20} className="text-[#23A6F0] mx-2" />
              </Link>
              <Link href="https://www.twitter.com" passHref>
                <FaTwitter size={20} className="text-[#23A6F0] mx-2" />
              </Link>
            </div>
          </div>

        <div className="bg-white">
          <div className="container pt-10 pb-5 flex flex-wrap max-w-4xl">
            <div className="flex flex-wrap md:justify-between w-full">
              <div className="lg:w-1/5 md:w-1/2 w-full mb-6 text-center md:text-start">
                <h2 className="title-font font-extrabold text-[#252B42] mb-3">
                  Company Info
                </h2>
                <ul className="text-[15px] font-bold text-gray-500 cursor-pointer leading-9">
                  <Link href="/about" passHref>
                    <li className="hover:text-gray-800">About Us</li>
                  </Link>
                  <Link href="/carrier" passHref>
                    <li className="hover:text-gray-800">Carrier</li>
                  </Link>
                  <Link href="/hiring" passHref>
                    <li className="hover:text-gray-800">We are hiring</li>
                  </Link>
                  <Link href="/blog" passHref>
                    <li className="hover:text-gray-800">Blog</li>
                  </Link>
                </ul>
              </div>

              <div className="lg:w-1/5 md:w-1/2 w-full mb-6 text-center md:text-start">
                <h2 className="title-font font-extrabold text-[#252B42] mb-3">
                  Legal
                </h2>
                <ul className="text-[15px] font-bold text-gray-500 cursor-pointer leading-9">
                  <Link href="/terms" passHref>
                    <li className="hover:text-gray-800">Terms of Service</li>
                  </Link>
                  <Link href="/privacy" passHref>
                    <li className="hover:text-gray-800">Privacy Policy</li>
                  </Link>
                  <Link href="/cookie-policy" passHref>
                    <li className="hover:text-gray-800">Cookie Policy</li>
                  </Link>
                  <Link href="/disclaimer" passHref>
                    <li className="hover:text-gray-800">Disclaimer</li>
                  </Link>
                </ul>
              </div>

              <div className="lg:w-1/5 md:w-1/2 w-full mb-6 text-center md:text-start">
                <h2 className="title-font font-extrabold text-[#252B42] mb-3">
                  Features
                </h2>
                <ul className="text-[15px] font-bold text-gray-500 cursor-pointer leading-9">
                  <li className="hover:text-gray-800">Business Marketing</li>
                  <li className="hover:text-gray-800">User Analytic</li>
                  <li className="hover:text-gray-800">Live Chat</li>
                  <li className="hover:text-gray-800">Unlimited Support</li>
                </ul>
              </div>

              <div className="lg:w-1/5 md:w-1/2 w-full mb-6 text-center md:text-start">
                <h2 className="title-font font-extrabold text-[#252B42] mb-3">
                  Resources
                </h2>
                <ul className="text-[15px] font-bold text-gray-500 cursor-pointer leading-9">
                  <li className="hover:text-gray-800">IOS & Android</li>
                  <li className="hover:text-gray-800">Watch a Demo</li>
                  <li className="hover:text-gray-800">Customers</li>
                  <li className="hover:text-gray-800">API</li>
                </ul>
              </div>

              <div className="lg:w-1/5 md:w-1/2 w-full mb-6 mt-6 ">
                <h2 className="title-font font-extrabold text-[#252B42] mb-3 text-center md:text-start">
                  Get In Touch
                </h2>
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="flex-grow w-[170px] lg:w-[6rem] bg-gray-100 rounded-l-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-700 py-5 px-2"
                    placeholder="Your Email"
                  />
                  <button className="text-white bg-blue-500 py-5 px-2 hover:bg-blue-600 rounded-r-sm">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-2 text-center md:text-start">
                  We Will Contact You Soon!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA] border-t border-gray-200">
          <div className="container max-w-4xl text-sm text-[#737373] lg:justify-start items-center justify-center mx-auto flex h-[74px]">
            <p className="text-center md:text-start">Made With Love By Finland All <br className="block md:hidden" /> Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
