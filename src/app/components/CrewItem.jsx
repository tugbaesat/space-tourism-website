import React from 'react'
import { bellefair } from "../fonts";

const CrewItem = ({crew}) => {
    return (
        <li className=" flex flex-col items-center justify-center px-5 text-secondary-violet lg:h-auto md:mx-auto ">
          <h2 className={`${bellefair.className} text-primaryViolet text-xl md:text-3xl pt-8 m-0 uppercase opacity-30`}>{crew.title}</h2>
          <h1
            className={`${bellefair.className} text-primaryWhite text-3xl md:text-6xl py-6 m-0 uppercase`}
          >
            {crew.name}
          </h1>
          <p className="text-primaryViolet text-sm md:text-lg font-normal font-['Barlow Condensed'] leading-tight lg:text-left text-center pb-10 md:px-20">
            {crew.description}
          </p>
        </li>
      );
}

export default CrewItem