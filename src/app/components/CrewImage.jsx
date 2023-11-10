import React from "react";
import Image from "next/image";

const CrewImage = ({ crew }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={crew.image}
        alt="logo"
        width={400}
        height={400}
        className="pt-6 h-80 md:h-[50vh] lg:h-[80vh] w-auto "
        // className="pt-6 md:pt-6 h-[250px] w-auto md:h-fit md:w-2/3"
        key={crew.id}
      />
    </div>
  );
};

export default CrewImage;
