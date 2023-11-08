"use client";
import { React, useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/shared/logo.svg";
import iconHamburger from "../../../public/assets/shared/icon-hamburger.svg";
import iconClose from "../../../public/assets/shared/icon-close.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menus = [
    { id: "00", name: "HOME" },
    { id: "01", name: "DESTINATION" },
    { id: "02", name: "CREW" },
    { id: "03", name: "TECHNOLOGY" },
  ];
  return (
    <nav className="flex items-center justify-between pt-5">
      <Image
        src={openMenu ? iconClose : iconHamburger}
        className="md:hidden  fixed right-5 cursor-pointer z-20 top-6"
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
        className="w-10 ml-7"
      />
      <ul
        className={`bg-[#ffffff14] backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-24 md:flex  md:items-center h-screen z-10 ${
          !openMenu ? "right-[-100%] " : "right-0"
        }`}
      >
        {menus.map((menu, index) => (
          <li
            key={index}
            className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6  duration-300"
          >
            <a className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3 border-b-2 border-b-transparent hover:border-primaryWhite duration-300">
              <span className="font-bold mr-1.5">{menu.id}</span> {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   return (
//     <section className="flex justify-between items-center pl-8 py-4">
//       <div>
//         <Image src={logo} alt="logo" width={24} height={24} />
//       </div>
//       <div className="hidden h-24 w-2/3 mr-0 bg-secondary-white bg-opacity-5 backdrop-blur-3xl md:flex justify-center items-center">
//         <ul className="flex gap-20">
//           <li className="uppercase cursor-pointer">
//             <span className="font-bold">00</span> Home
//           </li>
//           <li className="uppercase cursor-pointer">
//             <span className="font-bold">01</span> Destination
//           </li>
//           <li className="uppercase cursor-pointer">
//             <span className="font-bold">02</span> Crew
//           </li>
//           <li className="uppercase cursor-pointer">
//             <span className="font-bold">03</span> Technology
//           </li>
//         </ul>
//       </div>
//       <div className="md:hidden">
//         <Image
//           className="hidden"
//           src={iconHamburger}
//           alt="logo"
//           width={21}
//           height={24}
//         />

//         <div className=" mr-0 bg-secondary-white bg-opacity-5 backdrop-blur-lg flex flex-col justify-center items-end fixed top-0 right-0 md:h-auto h-screen z-10 md:pl-10 pr-28 md:static">
//           <Image src={iconClose} alt="logo" width={24} height={24} />
//           <ul className="flex flex-col gap-4 h-screen">
//             <li className="uppercase cursor-pointer">
//               <span className="font-bold">00</span> Home
//             </li>
//             <li className="uppercase cursor-pointer">
//               <span className="font-bold">01</span> Destination
//             </li>
//             <li className="uppercase cursor-pointer">
//               <span className="font-bold">02</span> Crew
//             </li>
//             <li className="uppercase cursor-pointer">
//               <span className="font-bold">03</span> Technology
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Navbar;
