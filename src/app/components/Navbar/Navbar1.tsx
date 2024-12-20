"use client";
import { MdPersonOutline } from "react-icons/md";
import { BsSearch, BsCart } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import SideBar2 from "./SideBar2";

const Navbar1 = (): JSX.Element => {
  return (
    <>
      <nav className="hidden lg:block bg-[#FFFFFF] w-auto h-[58px]">
        <div className="container max-w-4xl flex justify-between items-center h-full">
          <div className="flex gap-14">
            <h1 className="font-bold text-xl text-[#252B42]">Bandage</h1>

            <ul className="flex justify-center items-center text-[#737373] gap-[20px] font-semibold text-sm">
              <li className="hover:text-[#252B42]">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#252B42] flex items-center gap-1.5">
                <Link href="/components/ProductList">Shop</Link>
                <IoChevronDown size={15} />
              </li>
              <li className="hover:text-[#252B42]">
                <Link href="/components/aboutUs">About</Link>
              </li>
              <li className="hover:text-[#252B42]">
                <Link href="/Blog">Blog</Link>
              </li>
              <li className="hover:text-[#252B42]">
                <Link href="/Contact">Contact</Link>
              </li>
              <li className="hover:text-[#252B42]">
                <Link href="/Pages">Pages</Link>
              </li>
            </ul>
          </div>

          <div className="flex text-[#23A6F0] gap-[30px]">
            <div className="flex items-center gap-1">
              <MdPersonOutline size={15} />
              <div className="font-bold text-sm flex gap-2">
                <h2>Login</h2>
                <span>/</span>
                <h2>Register</h2>
              </div>
            </div>
            <div className="flex items-center gap-[25px]">
              <BsSearch size={15} />
              <div className="flex items-center gap-1">
                <BsCart size={15} />
                <h4>1</h4>
              </div>
              <div className="flex items-center gap-1">
                <IoMdHeartEmpty size={15} />
                <h4>1</h4>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="lg:hidden">
        <SideBar2 />
      </nav>
    </>
  );
};

export default Navbar1;
