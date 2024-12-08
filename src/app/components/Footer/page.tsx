import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="body-font bg-[#FAFAFA]">
        <div className="container py-8 mx-auto max-w-7xl flex lg:items-center lg:flex-row flex-col justify-between items-center">
          <Link href="/" passHref>
            <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-0 md:ml-3 text-xl font-bold">Bandage</span>
            </span>
          </Link>

          <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
          <div className="container py-6 flex flex-wrap max-w-7xl">
            <div className="flex flex-wrap justify-between w-full">
              <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-6">
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

              <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-6">
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

              <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-6">
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

              <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-6">
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

              <div className="lg:w-1/5 md:w-1/2 w-full px-4 mb-6">
                <h2 className="title-font font-extrabold text-[#252B42] mb-3">
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
                <p className="text-gray-500 text-sm mt-2">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 bg-[#FAFAFA] border-t border-gray-200">
          <div className="container max-w-[80rem] text-sm text-[#737373] text-start">
            <p>Made With Love By Finland All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
