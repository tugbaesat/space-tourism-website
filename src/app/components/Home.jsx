import React from "react";
import { bellefair } from "../fonts";
const Home = () => {
  return (
    <section
      id="home"
      className=" flex flex-col lg:flex-row justify-around items-center pt-20 md:pt-36 lg:text-left text-center bg-sm-image md:bg-md-image lg:bg-lg-image bg-cover bg-no-repeat h-screen"
    >
      <div className=" flex flex-col items-center justify-center mx-20 md:w-1/3 text-secondary-violet lg:h-auto ">
        <h5 className="text-xl lg:text-3xl font-['Barlow Condensed'] tracking-widest">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1
          className={`${bellefair.className} text-primaryWhite text-7xl md:text-9xl my-6 p-0 mx-0`}
        >
          SPACE
        </h1>
        <p className="text-sm md:text-lg font-normal font-['Barlow Condensed'] leading-loose lg:text-left text-center">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="py-6 md:py-20">
        <button className="bg-primaryWhite rounded-full w-52 h-52">
          <span className={`text-primaryBlack text-3xl ${bellefair.className}`}>
            EXPLORE
          </span>
        </button>
      </div>
    </section>
  );
};

export default Home;
