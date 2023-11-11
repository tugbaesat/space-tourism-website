"use client";
import React, { useState } from "react";
import technologies from "./Technologies";
import TechnologyItem from "./TechnologyItem";
import TechnologyImage from "./TechnologyImage";

const TechnologyList = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);

  const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <section
      id="technology"
      className="pt-20 md:pt-36 text-center bg-sm-image-technology md:bg-md-image-technology lg:bg-lg-image-technology bg-cover bg-no-repeat h-screen"
    >
      <h5 className="text-lg lg:text-3xl font-['Barlow Condensed'] tracking-widest uppercase md:text-left md:pl-10">
        <span className="text-primaryViolet font-bold pr-4 opacity-25">03</span>{" "}
        space launch 101
      </h5>
      <div className="flex flex-col-reverse justify-center items-center md:gap-10 lg:grid lg:grid-cols-2 lg:text-left">
        <div className="flex flex-col lg:flex-row lg:text-left">
          <ul className="flex lg:flex-col justify-center items-center gap-4 md:gap-10 my-5 cursor-pointer lg:justify-start lg:pl-24">
            {technologies.map((technology) => (
              <li
                key={technology.id}
                onClick={() => handleTechnologyClick(technology)}
              >
                <div
                  className={` rounded-full m-2 w-10 h-10 border flex items-center justify-center ${
                    selectedTechnology === technology
                      ? "bg-primaryWhite"
                      : "bg-transparent"
                  }`}
                >
                  <span
                    className={` z-10 ${
                      selectedTechnology === technology
                        ? "text-primaryBlack"
                        : "text-primaryWhite"
                    }`}
                  >
                    {technology.id}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <TechnologyItem technology={selectedTechnology} />
          </div>
        </div>
        <TechnologyImage technology={selectedTechnology} />
      </div>
    </section>
  );
};

export default TechnologyList;
