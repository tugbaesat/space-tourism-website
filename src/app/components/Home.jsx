import React from "react";
import { bellefair } from "../fonts";
const Home = () => {
  return (
    <section id="home" className=" flex flex-col gap-6 lg:flex-row lg:justify-around items-center mt-20 md:mt-36 lg:text-left text-center">
      <div className=" flex flex-col items-center justify-center mx-20 md:w-1/3 text-secondary-violet lg:h-auto ">
        <h5 className="text-xl lg:text-3xl font-['Barlow Condensed'] tracking-widest">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1
          className={`${bellefair.className} text-secondary-white text-7xl md:text-9xl my-6 p-0 mx-0`}
        >SPACE
        </h1>
        <p className=" text-lg font-normal font-['Barlow Condensed'] leading-loose lg:text-left text-center">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="pt-20">
        <button className="bg-secondary-white rounded-full w-52 h-52 ">
          <span
            className={`text-primary-black text-3xl ${bellefair.className}`}
          >
            EXPLORE
          </span>
        </button>
      </div>
    </section>
  );
};

export default Home;
