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
    <section
      id="crew"
      className="pt-20 md:pt-36 text-center bg-sm-image-crew md:bg-md-image-crew lg:bg-lg-image-crew bg-cover bg-no-repeat h-screen lg:text-left"
    >
      <h5 className="text-lg lg:text-3xl font-['Barlow Condensed'] tracking-widest uppercase md:text-left md:pl-10">
        <span className="text-primaryViolet font-bold pr-4 opacity-25">02</span>{" "}
        Meet your crew
      </h5>
      <div className="flex flex-col-reverse md:flex-col  md:justify-between md:gap-10 lg:grid lg:grid-cols-2 lg:text-left">
        <div className="flex flex-col md:flex-col-reverse lg:text-left">
          <ul className="flex justify-center items-center gap-4 md:gap-10 my-5 cursor-pointer lg:justify-start lg:pl-24">
            {crews.map((crew) => (
              <li key={crew.id} onClick={() => handleCrewClick(crew)}>
                <div
                  className={` rounded-full m-2 w-3 h-3  ${
                    selectedCrew === crew
                      ? "bg-primaryWhite"
                      : "bg-primaryWhite opacity-25"
                  }`}
                ></div>
              </li>
            ))}
          </ul>
          <div>
            <CrewItem crew={selectedCrew} />
          </div>
        </div>
        <CrewImage crew={selectedCrew} />
      </div>
    </section>
  );
};

export default CrewsList;
