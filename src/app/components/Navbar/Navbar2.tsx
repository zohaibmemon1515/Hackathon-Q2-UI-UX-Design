import Link from "next/link";
import { TiArrowRightThick } from "react-icons/ti";
import SideBar2 from "./SideBar2";

const Navbar2 = (): JSX.Element => {
  return (
    <>
      <nav className="hidden lg:block bg-[#FFFFFF] w-auto h-[58px]">
        <div className="container  max-w-4xl flex justify-between items-center h-full">
          <div className="flex gap-20">
            <h1 className="font-bold text-xl text-[#252B42]">Bandage</h1>

            <ul className="flex justify-center items-center text-[#737373] gap-[20px] font-semibold text-sm">
              <li className="hover:text-[#252B42]">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#252B42]">
                <Link href="/components/ProductList">Product</Link>
              </li>
              <li className="hover:text-[#252B42]">
                <Link href="/components/Pricing">Pricing</Link>
              </li>
              <li className="hover:text-[#252B42]">
                <Link href="/components/Contactus">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex text-[#23A6F0] gap-[35px] font-bold text-sm">
            <div className="flex items-center gap-1">
              <h2>Login</h2>
            </div>
            <div className="flex items-center gap-[25px]">
              <div className="flex items-center justify-center gap-2 bg-[#23A6F0] text-[#FFFFFF] py-3 px-4 rounded-md text-sm">
                <h3>Became a member</h3>
                <TiArrowRightThick
                  size={15}
                  className="flex justify-center items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="lg:hidden">
        <SideBar2 />
      </div>
    </>
  );
};

export default Navbar2;
