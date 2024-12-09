import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TopBarGreen = (): JSX.Element => {
  return (
    <header className="hidden lg:block bg-[#23856D] w-auto h-[4rem]">
      <div className="container max-w-[80rem] mx-auto flex justify-between items-center text-white h-full">
        <div className="flex gap-5">
          <div className="flex items-center justify-center gap-1">
            <IoCallOutline size={20} />
            <p className="text-sm font-extralight">(225) 555-0118</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdOutlineEmail size={20} />
            <p className="text-sm font-extralight">
              michelle.rivera@example.com
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-sm">
            Follow Us and get a chance to win 80% off
          </h1>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div>
            <h2 className="font-semibold text-sm">Follow Us</h2>
          </div>
          <span>:</span>
          <div className="flex gap-3">
            <FaInstagram size={18} />
            <FaYoutube size={18} />
            <FaFacebook size={18} />
            <FaTwitter size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBarGreen;
