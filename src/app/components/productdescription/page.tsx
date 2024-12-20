import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const ProductDescription = () => {
  return (
    <div className="max-w-4xl container mb-10 mt-16">
      <div className="flex justify-center space-x-8 pb-10 font-semibold">
        <Link href="#" className="text-gray-600 hover:text-black">
          Description
        </Link>
        <Link href="#" className="text-gray-600 hover:text-black font-bold">
          Additional Information
        </Link>
        <Link href="#" className="text-gray-600 hover:text-black">
          Reviews
          <span className="text-green-500"> (0) </span>
        </Link>
      </div>

      <div className="flex flex-col items-center md:flex-col lg:flex-row lg:items-start gap-8 lg:border-t-2 lg:border-gray-300 pt-10">
        <div className="w-full md:w-2/4 lg:w-1/3 flex justify-center">
          <Image
            src="https://storage.googleapis.com/a1aa/image/yk8iEgTWJSYcP99tAYL9gmNY6L9JLEWk8reNQJM2Ltrmpl8JA.jpg"
            alt="A modern interior with a pink chair and a framed picture on a pink and gray wall"
            width={300}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-[25rem] lg:w-1/3 text-start lg:text-left mt-16 md:mt-16 lg:mt-0 container">
          <h2 className="text-xl font-bold mb-4 text-start">
            The Quick Fox Jumps Over
          </h2>
          <p className="mb-4 text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie.
          </p>
          <p className="mb-4 text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie.
          </p>
        </div>

        <div className="w-full md:w-[25rem] lg:w-1/3 text-start lg:text-left container max-w-4xl">
          <h2 className="text-lg font-bold mb-3">The Quick Fox Jumps Over</h2>
          <ul className="list-inside">
            {Array(4)
              .fill("The quick fox jumps over the lazy dog")
              .map((text, index) => (
                <li
                  key={index}
                  className="mb-2 flex justify-start lg:justify-start gap-2 lg:text-[10px] md:tex-sm"
                >
                  <FaChevronRight size={12} />
                  {text}
                </li>
              ))}
          </ul>
          <h2 className="text-lg font-bold mt-5 mb-4 text-start">
            The Quick Fox Jumps Over
          </h2>
          <ul className="list-inside">
            {Array(4)
              .fill("The quick fox jumps over the lazy dog")
              .map((text, index) => (
                <li
                  key={index}
                  className="mb-2 flex justify-start lg:justify-start gap-2 text-sm lg:text-[10px]"
                >
                  <FaChevronRight size={12} />
                  {text}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
