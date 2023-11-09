"use client";
import React, { useState } from "react";
import crews from "./Crews";
import CrewImage from "./CrewImage";
import CrewItem from "./CrewItem";

const CrewsList = () => {
  const [selectedCrew, setSelectedCrew] = useState(crews[0]);

  const handleCrewClick = (crew) => {
    setSelectedCrew(crew);
  };

  return (
    <section className="pt-20 md:pt-36 text-center bg-sm-image-destination md:bg-md-image-destination lg:bg-lg-image-destination bg-cover bg-no-repeat h-screen">
      <h5 className="text-lg lg:text-3xl font-['Barlow Condensed'] tracking-widest uppercase md:text-left md:pl-10">
        <span className="text-primaryViolet font-bold pr-4 opacity-25">02</span>{" "}
        Meet your crew
      </h5>
      <div className="flex flex-col-reverse md:flex-col lg:grid lg:grid-cols-2">
        
        <div>
        <ul className="flex justify-center items-center gap-10 mt-10 ">
          {crews.map((crew) => (
            <li
              key={crew.id}
              onClick={() => handleCrewClick(crew)}
              className={` rounded-full w-3 h-3 ${
                selectedCrew === crew
                  ? "bg-primaryWhite"
                  : "bg-primaryWhite opacity-25"
              }`}
            ></li>
          ))}
        </ul>
        <CrewItem crew={selectedCrew} />
        </div>
        <CrewImage crew={selectedCrew} />
      </div>
    </section>
  );
};

export default CrewsList;
