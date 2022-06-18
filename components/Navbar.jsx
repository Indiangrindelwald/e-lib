import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {ImBooks} from "react-icons/im"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-30 shadow-xl z-[100] bg-[#F7EEF0]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <ImBooks size={70} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed-left left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " md:hidden fixed left-0 top-0 width-[75%] sm:w-[60%} md:w-[45%] h-screen bg-[#E0E2EB] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <ImBooks size={70} />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">lorem ipsum</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
            </ul>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
