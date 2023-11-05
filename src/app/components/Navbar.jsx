import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/shared/logo.svg";
import iconHamburger from "../../../public/assets/shared/icon-hamburger.svg";
import iconClose from "../../../public/assets/shared/icon-close.svg";

const Navbar = () => {
  return (
    <section className="flex justify-between items-center pl-8 py-4">
      <div  >
        <Image src={logo} alt="logo" width={40} height={40} />
      </div>
      <div className=" h-24 w-2/3 mr-0 bg-secondary-white bg-opacity-5 backdrop-blur-3xl flex justify-center items-center">
        <ul className="flex gap-20 ">
          <li className="uppercase cursor-pointer">
            <span className="font-bold">00</span> Home
          </li>
          <li className="uppercase cursor-pointer">
            <span className="font-bold">01</span> Destination
          </li>
          <li className="uppercase cursor-pointer">
            <span className="font-bold">02</span> Crew
          </li>
          <li className="uppercase cursor-pointer">
            <span className="font-bold">03</span> Technology
          </li>
        </ul>
      </div>
      {/* <div>
        <Image src={iconHamburger} alt="logo" width={21} height={24} />
        <Image
          className="hidden"
          src={iconClose}
          alt="logo"
          width={40}
          height={40}
        />
      </div> */}
    </section>
  );
};

export default Navbar;
