"use client";
import { useState } from "react";
import { BsSearch, BsCart } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import Link from "next/link";

const SideBar2 = (): JSX.Element => {
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
            <BsSearch size={20} />
            <BsCart size={20} />
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
              <Link href="/Product">Product</Link>
            </li>
            <li className="hover:text-[#252B42]">
              <Link href="/Pricing">Pricing</Link>
            </li>
            <li className="hover:text-[#252B42]">
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar2;
