import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/shared/logo.svg";
import iconHamburger from "../../../public/assets/shared/icon-hamburger.svg";
import iconClose from "../../../public/assets/shared/icon-close.svg";

const Navbar = () => {
  return (
    <section className="flex justify-between align-baseline px-8 py-4">
      <div>
        <Image src={logo} alt="logo" width={40} height={40}/>
      </div>
      <div>
        <Image src={iconHamburger} alt="logo" width={21} height={24}/>
        <Image className="hidden" src={iconClose} alt="logo" width={40} height={40}/>
      </div>
    </section>
  );
};

export default Navbar;
