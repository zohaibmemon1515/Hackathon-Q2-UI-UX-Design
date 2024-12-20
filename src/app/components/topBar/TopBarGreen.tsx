import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TopBarGreen = (): JSX.Element => {
  return (
    <header className="hidden lg:block bg-[#23856D] w-auto h-[58px]">
      <div className="container max-w-4xl flex justify-between items-center text-white h-full">
        <div className="flex gap-5">
          <div className="flex items-center justify-center gap-1">
            <IoCallOutline size={15} />
            <p className="text-xs font-extralight">(225) 555-0118</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdOutlineEmail size={15} />
            <p className="text-xs font-extralight">
              michelle.rivera@example.com
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-xs">
            Follow Us and get a chance to win 80% off
          </h1>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div>
            <h2 className="font-semibold text-xs">Follow Us</h2>
          </div>
          <span>:</span>
          <div className="flex gap-3">
            <FaInstagram size={15} />
            <FaYoutube size={15} />
            <FaFacebook size={15} />
            <FaTwitter size={15} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBarGreen;
