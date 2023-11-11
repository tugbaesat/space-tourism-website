"use client";
import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/shared/logo.svg";
import iconHamburger from "../../../public/assets/shared/icon-hamburger.svg";
import iconClose from "../../../public/assets/shared/icon-close.svg";
import "../globals.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menus = [
    { id: "00", name: "HOME", path: "/#home" },
    { id: "01", name: "DESTINATION", path: "/#destination" },
    { id: "02", name: "CREW", path: "/#crew" },
    { id: "03", name: "TECHNOLOGY", path: "/#technology" },
  ];
  return (
    <nav className="flex items-center justify-between pt-5 fixed">
      <Image
        src={openMenu ? iconClose : iconHamburger}
        className="md:hidden fixed right-5 z-20 top-6 cursor-pointer "
        onClick={() => setOpenMenu(!openMenu)}
        alt="logo"
        width={21}
        height={24}
      />
      <Image
        src={logo}
        alt="logo"
        width={24}
        height={24}
        className="w-12 ml-7 md:w-14 md:py-4  fixed left-5 z-20 top-6"
      />
      <ul
        className={`bg-[#ffffff14] backdrop-blur-lg fixed top-0 h-screen w-[70%] md:w-2/3 md:h-24 md:right-0 md:flex md:justify-evenly lg:mt-4 duration-500 ease-linear z-10 pt-40 pl-6 md:p-0  ${
          !openMenu ? "right-[-100%] " : "right-0"
        }`}
      >
        {menus.map((menu, index) => (
          <li
            key={index}
            className="flex items-center h-12 md:h-24 border-r-2 md:border-r-0 my-10 md:my-0 md:border-b-2 border-transparent hover:border-primaryWhite duration-300"
          >
            <Link href={menu.path} className="text-primaryWhite">
              <span className="mr-1.5 font-extrabold">{menu.id}</span> {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
