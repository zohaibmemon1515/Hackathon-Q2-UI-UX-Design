import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TopBarBlack = (): JSX.Element => {
  return (
    <header className="hidden lg:block bg-[#252B42] w-auto h-[58px]">
      <div className="container max-w-[80rem] mx-auto px-10 flex justify-between items-center text-white h-full">
        <div className="flex gap-5">
          <div className="flex items-center justify-center gap-1">
            <IoCallOutline size={20} />
            <h2 className="font-bold text-sm">(225) 555-0118</h2>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdOutlineEmail size={20} />
            <h2 className="font-semibold text-sm">
              michelle.rivera@example.com
            </h2>
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

export default TopBarBlack;
