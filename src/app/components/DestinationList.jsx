"use client";
import React, { useState } from "react";
import destinations from "./Destinations";
import DestinationItem from "./DestinationItem";
import DestinationImage from "./DestinationImage";

const DestinationList = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <section className="pt-20 md:pt-36 text-center bg-sm-image-destination md:bg-md-image-destination lg:bg-lg-image-destination bg-cover bg-no-repeat h-screen">
      <h5 className="text-lg lg:text-3xl font-['Barlow Condensed'] tracking-widest uppercase md:text-left md:pl-10">
        <span className="text-primaryViolet font-bold pr-4 opacity-25">01</span>{" "}
        pick your destination
      </h5>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ul>
          <DestinationImage destination={selectedDestination} />
        </ul>
        <div>
          <ul className="flex justify-center gap-4 pt-6">
            {destinations.map((destination) => (
              <li
                key={destination.id}
                onClick={() => handleDestinationClick(destination)}
                className={` text-lg not-italic font-normal cursor-pointer ${
                  selectedDestination === destination
                    ? "underline text-primaryWhite"
                    : "none text-primaryViolet"
                }`}
              >
                {destination.name}
              </li>
            ))}
          </ul>
          <ul>
            <DestinationItem destination={selectedDestination} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DestinationList;
