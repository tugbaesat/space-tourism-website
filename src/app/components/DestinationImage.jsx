import React from "react";
import Image from "next/image";

const DestinationImage = ({ destination }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={destination.image}
        alt="logo"
        width={400}
        height={400}
        className="pt-6 md:pt-6 w-2/3 md:w-1/2"
      />
    </div>
  );
};

export default DestinationImage;
