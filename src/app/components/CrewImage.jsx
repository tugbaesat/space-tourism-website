import React from "react";
import Image from "next/image";

const CrewImage = ({ crew }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Image
        src={crew.image}
        alt="logo"
        width={400}
        height={400}
        className="pt-6 md:pt-6 h-[250px] w-auto md:h-1/2 lg:h-fit"
        key={crew.id}
      />
    </div>
  );
};

export default CrewImage;
