import React from "react";
import Image from "next/image";

const TechnologyImage = ({ technology }) => {
  return (
    <div className="flex justify-end items-center">
      <div className="inline-block lg:hidden">
        <Image
          src={technology.imageL}
          alt="logo"
          width={400}
          height={400}
          className=" pt-6 h-80 md:h-[50vh]  w-auto "
          key={technology.id}
        />
      </div>
      <div className="hidden lg:inline-block ">
        <Image
          src={technology.imageP}
          alt="logo"
          width={400}
          height={400}
          className="pt-6 h-80 md:h-[50vh]  w-auto "
          key={technology.id}
        />
      </div>
    </div>
  );
};

export default TechnologyImage;
