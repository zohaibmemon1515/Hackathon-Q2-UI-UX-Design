import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TopBarBlack = (): JSX.Element => {
  return (
    <header className="hidden lg:block bg-[#252B42] h-[58px]">
      <div className="container max-w-4xl flex justify-between items-center text-white h-full">
        <div className="flex gap-12">
          <div className="flex items-center justify-center gap-2">
            <IoCallOutline size={15} />
            <h2 className="font-bold text-xs">(022) 266-3191</h2>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MdOutlineEmail size={15} />
            <h2 className="font-semibold text-xs">
              zohaibmemon1515@gmail.com
            </h2>
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

export default TopBarBlack;
