import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-white">
      <div className="md:py-16 py-24 px-6 container max-w-4xl">
        <div className="text-center">
          <p className="text-gray-800 uppercase tracking-wider text-sm font-bold">
            Visit Our Office
          </p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            We help small businesses <br className="hidden md:block" /> with big ideas
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-16 max-w-xl mx-auto lg:flex justify-center items-center">
         
          <div className="flex flex-col items-center text-center space-y-4 shadow-lg border border-gray-200 rounded-lg p-6">
            <div className="text-[#23A6F0]">
              <FaPhoneAlt size={48} />
            </div>
            <p className="text-gray-800 font-semibold">georgia.young@example.com</p>
            <p className="text-gray-800">georgia.young@ple.com</p>
            <p className="font-bold text-gray-800">Get Support</p>
            <button className="border border-[#23A6F0] text-[#23A6F0] py-2 px-6 rounded-full hover:bg-[#23A6F0] hover:text-white transition">
              Submit Request
            </button>
          </div>

        
          <div className="flex flex-col items-center text-center space-y-4 shadow-lg border border-gray-200 rounded-lg p-6 bg-[#252B42] text-white">
            <div>
              <FaMapMarkerAlt size={48} className="text-[#23A6F0]" />
            </div>
            <p className="font-semibold">georgia.young@example.com</p>
            <p>georgia.young@ple.com</p>
            <p className="font-bold">Get Support</p>
            <button className="border border-[#23A6F0] text-[#23A6F0] py-2 px-6 rounded-full hover:bg-[#23A6F0] hover:text-white transition">
              Submit Request
            </button>
          </div>

        
          <div className="flex flex-col items-center text-center space-y-4 shadow-lg border border-gray-200 rounded-lg p-6">
            <div className="text-[#23A6F0]">
              <FaEnvelope size={48} />
            </div>
            <p className="text-gray-800 font-semibold">georgia.young@example.com</p>
            <p className="text-gray-800">georgia.young@ple.com</p>
            <p className="font-bold text-gray-800">Get Support</p>
            <button className="border border-[#23A6F0] text-[#23A6F0] py-2 px-6 rounded-full hover:bg-[#23A6F0] hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
