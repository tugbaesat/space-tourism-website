import React from "react";
import { bellefair } from "../fonts";

const DestinationItem = ({ destination }) => {
  return (
    <li className=" flex flex-col items-center justify-center px-5 text-secondary-violet lg:h-auto md:mx-auto ">
      <h1
        className={`${bellefair.className} text-primaryWhite text-5xl md:text-9xl py-6 m-0 uppercase`}
      >
        {destination.name}
      </h1>
      <p className="text-primaryViolet text-sm md:text-lg font-normal font-['Barlow Condensed'] leading-tight lg:text-left text-center pb-10 md:px-20">
        {destination.description}
      </p>
      <hr className=" bg-primaryViolet w-5/6 opacity-25" />
      <div className="flex flex-col md:flex-row md:gap-10">
        <div>
          <p className="uppercase font-bold text-primaryViolet text-lg md:text-xl p-4">
            AVG. DISTANCE
          </p>
          <p
            className={`${bellefair.className} uppercase text-2xl md:text-3xl pb-6`}
          >
            {destination.avgDistance}
          </p>
        </div>
        <div>
          <p className="uppercase font-bold text-primaryViolet text-lg md:text-xl p-4">
            Est. travel time
          </p>
          <p
            className={`${bellefair.className} uppercase text-2xl md:text-3xl pb-6`}
          >
            {destination.travelTime}
          </p>
        </div>
      </div>
    </li>
  );
};

export default DestinationItem;
