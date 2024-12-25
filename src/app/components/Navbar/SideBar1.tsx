"use client";

import { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { BsSearch, BsCart } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";

const SideBar1 = (): JSX.Element => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="sm:block lg:hidden bg-[#FFFFFF] w-full h-[58px]">
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <h1 className="font-bold text-2xl text-[#252B42]">Bandage</h1>

          <div className="flex items-center gap-6 text-[#252B42]">
            <button
              className="text-[#252B42] focus:outline-none"
              onClick={toggleSidebar}
            >
              <TbMenuDeep size={24} />
            </button>
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <div className="fixed top-15 left-0 w-full h-screen bg-[#FFFFFF] z-50 shadow-md">
          <ul className="flex flex-col items-center text-[#737373] gap-6 p-6 font-semibold text-lg relative">
            <button
              className="absolute top-0 right-6 text-[#252B42] focus:outline-none"
              onClick={toggleSidebar}
            >
              <IoClose size={24} />
            </button>

            <li className="hover:text-[#252B42]">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#252B42]">
              <Link href="/components/ProductList">Shop</Link>
            </li>
            <li className="hover:text-[#252B42]">
              <Link href="/components/aboutUs">About</Link>
            </li>
            <li className="hover:text-[#252B42]">
              <Link href="/Blog">Blog</Link>
            </li>
            <li className="hover:text-[#252B42]">
              <Link href="/components/Contactus">Contact</Link>
            </li>
            <li className="hover:text-[#252B42]">
              <Link href="/components/Pricing">Pages</Link>
            </li>
          </ul>

          <div className="justify-center items-center">
            <div className="flex items-center justify-center gap-2 text-[#23A6F0]">
              <MdPersonOutline size={20} />
              <div className="font-bold text-base flex justify-center items-center gap-2">
                <h2>Login</h2>
                <span>/</span>
                <h2>Register</h2>
              </div>
            </div>

            <div className="flex flex-col items-center text-[#23A6F0] mt-5 gap-y-3">
              <div className="flex justify-center items-center">
                <BsSearch size={20} />
              </div>
              <div className="flex items-center justify-center gap-1">
                <BsCart size={20} />
                <h4 className="text-xs">1</h4>
              </div>
              <div className="flex items-center justify-center gap-1">
                <IoMdHeartEmpty size={20} />
                <h4 className="text-xs">1</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar1;
