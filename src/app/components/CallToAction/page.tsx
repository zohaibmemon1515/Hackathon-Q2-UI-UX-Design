import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white md:py-16 py-20">
      <div className="text-center">
        <p className="text-sm text-gray-800 uppercase mb-4 font-semibold">
          We Can &apos t <span className="font-bold">WAIT TO MEET YOU</span>
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Let &apos s Talk</h1>
        <button className="px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-600 transition">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
