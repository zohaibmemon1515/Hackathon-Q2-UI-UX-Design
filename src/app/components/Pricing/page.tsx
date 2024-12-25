"use client";
import Navbar2 from "../Navbar/Navbar2";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import ClientRow from "../clientRow/page";
import FAQ from "../PricingFAQ/page";
import CTASection from "../CTA/page";
import Footer from "../Footer/page";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <>
      <Navbar2 />
      <div className="text-center bg-white h-full mt-20 ">
        <h4 className="font-semibold text-lg opacity-85">PRICING</h4>
        <h2 className="text-4xl font-bold mt-6">Simple Pricing</h2>
        <div className="text-gray-600 mt-8 mb-8 flex justify-center items-center text-center gap-2">
          <p className="font-semibold text-black">Home</p>{" "}
          <span>
            <FaAngleRight />
          </span>{" "}
          <p>Pricing</p>
        </div>
      </div>

      <div className="bg-gray-50 h-full">
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Pricing</h2>
            <p className="text-gray-600 mb-8">
              Problems trying to resolve the conflict between the two major <br className="hidden md:block" />
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4">
              <span
                className={
                  billingCycle === "monthly"
                    ? "text-gray-800 font-semibold"
                    : "text-gray-400"
                }
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "yearly" : "monthly"
                  )
                }
                className="bg-gray-200 p-2 rounded-full w-16 relative"
              >
                <span
                  className={`block w-6 h-6 bg-blue-500 rounded-full transition-transform ${
                    billingCycle === "yearly" ? "transform translate-x-6" : ""
                  }`}
                ></span>
              </button>
              <span
                className={
                  billingCycle === "yearly"
                    ? "text-gray-800 font-semibold"
                    : "text-gray-400"
                }
              >
                Yearly
              </span>
              <span className="text-blue-700 text-sm ml-2 font-semibold bg-[#8EC2F2] px-4 py-2 rounded-full">
                Save 25%
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="border rounded-lg px-5 py-14 text-center w-[285px]">
              <h3 className="text-xl font-bold mb-2">FREE</h3>
              <p className="text-gray-600 mt-8">
                Organize across all apps by hand
              </p>
              <p className="text-4xl font-bold mt-8 text-[#23A6F0]">
                ${billingCycle === "monthly" ? "0" : "0"}
              </p>
              <p className="text-[#23A6F0]">
                Per {billingCycle === "monthly" ? "Month" : "Year"}
              </p>
              <ul className="text-black space-y-4 mt-6 font-semibold text-start text-sm">
                <li>
                  <span className="bg-[#2DC071] rounded-full px-2 py-1 text-white mr-2">
                    ✓
                  </span>
                  Unlimited product updates
                </li>
                <li>
                  <span className="bg-[#2DC071] rounded-full px-2 py-1 text-white mr-2">
                    ✓
                  </span>
                  10GB Cloud storage
                </li>
                <li>
                  <span className="bg-[#2DC071] rounded-full px-2 py-1 text-white mr-2">
                    ✓
                  </span>
                  Email and Community Support
                </li>
              </ul>
            </div>

            <div className="border rounded-lg px-5 py-14 text-center w-[285px] bg-[#252B42]">
              <h3 className="text-xl font-bold mb-2 text-white">STANDARD</h3>
              <p className="text-white mt-8">
                Organize across all apps by hand
              </p>
              <p className="text-4xl font-bold mt-8 text-[#23A6F0]">
                ${billingCycle === "monthly" ? "9.99" : "99.99"}
              </p>
              <p className="text-[#23A6F0]">
                Per {billingCycle === "monthly" ? "Month" : "Year"}
              </p>
              <ul className="text-white space-y-4 mt-6 font-semibold text-start text-sm">
                <li>
                  <span className="bg-[#2DC071] rounded-full px-2 py-1 text-white mr-2">
                    ✓
                  </span>
                  Unlimited product updates
                </li>
                <li>
                  <span className="bg-[#2DC071] rounded-full px-2 py-1 text-white mr-2">
                    ✓
                  </span>
                  1GB Cloud storage
                </li>
                <li>
                  <span className="bg-[#2DC071] rounded-full px-2 py-1 text-white mr-2">
                    ✓
                  </span>
                  Email and Community Support
                </li>
              </ul>
            </div>

            <div className="border rounded-lg px-5 py-14 text-center w-[285px]">
              <h3 className="text-xl font-bold mb-2">PREMIUM</h3>
              <p className="text-gray-600 mt-8">
                Organize across all apps by hand
              </p>
              <p className="text-4xl font-bold mt-8 text-[#23A6F0]">
                ${billingCycle === "monthly" ? "19.99" : "199.99"}
              </p>
              <p className="text-[#23A6F0]">
                Per {billingCycle === "monthly" ? "Month" : "Year"}
              </p>
              <ul className="text-black space-y-4 mt-6 font-semibold text-start text-sm">
                <li>
                  <span className="bg-[#2DC071] rounded-full px-2 py-1 text-white mr-2">
                    ✓
                  </span>
                  Unlimited product updates
                </li>
                <li>
                  <span className="bg-[#2DC071] rounded-full px-2 py-1 text-white mr-2">
                    ✓
                  </span>
                  10GB Cloud storage
                </li>
                <li>
                  <span className="bg-[#2DC071] rounded-full px-2 py-1 text-white mr-2">
                    ✓
                  </span>
                  Email and Community Support
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <div className="bg-gray-100 justify-center items-center flex text-base font text-[#252B42] font-semibold pt-10 md:pt-0">
        <p className="pt-10">Trusted By Over 4000 Big Companies</p>
      </div>
      <ClientRow/>
      <FAQ/>
      <CTASection/>
      <Footer/>
    </>
  );
};

export default Pricing;
