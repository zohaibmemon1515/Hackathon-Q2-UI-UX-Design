import Link from "next/link";
import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
const CTASection = () => {
  return (
    <div className="bg-white py-20 ">
      <div className="container mx-auto px-4 max-w-4xl text-center h-full">
        <h2 className="text-3xl font-bold mb-6">
          Start your 14 days free trial
        </h2>
        <p className="text-gray-600 mb-8">
          Met minim Mollie non desert Alamo est sit cliquey dolor do <br className="hidden md:block" /> met sent.
          RELIT official consequent.
        </p>

        <div className="mb-8">
          <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">
            Try it free now
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <Link href="#" className="text-blue-400 hover:text-blue-500 text-2xl">
            <FaTwitter/>
          </Link>
          <Link href="#" className="text-blue-700 hover:text-blue-800 text-2xl">
          <FaFacebookSquare/>
          </Link>
          <Link href="#" className="text-pink-500 hover:text-pink-600 text-2xl">
          <FaInstagram/>
          </Link>
          <Link href="#" className="text-blue-600 hover:text-blue-700 text-2xl">
          <FaLinkedin/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
